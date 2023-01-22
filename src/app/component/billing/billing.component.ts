import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';
import * as moment from 'moment';
import { BillingService } from 'src/app/service/billing/billing.service';
import { UserService } from 'src/app/service/user/user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { map, switchMap, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { ModeService } from 'src/app/service/mode/mode.service';
import { BranchService } from 'src/app/service/branch/branch.service';




@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {



  public field: string;
  public sortOrder = false;
  public selectAll = false;
  public oldBranchId: string;
  public LoadingText = 'abc';
  public sortFields = {
    total_price:true,
    payment_mode:true,
    delivery_mode:true,
    customer_name:true,
    user_name:true,
    createdOn: true
  };
  public payment = [];
  public delivery = [];
  public showPrint = false
  // const debouncetime = pipe(debounceTime(1000));
  


  public billList = [];
  public firstName: string;
  public lastName: string;
  public email:string;
  public password: string;
  public phone: string;
  public status: string;
  public response = 'No Data to Show';
  public detail:any;
  public selectedPaymentMode:any;
  public selectedDeliveryMode:any;
  public selectedUserName:any;
  public searchedName = '';
  public selectedDate = '';
  public userNameList:any = [];
  public total: any;
  public printDetail;


  selectedPerPage = 10;
  currentpage: number = 1;
  totalPage: number;
  role = '';


  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  selectedStartDate: any;
  selectedEndDate: any;
  branchDetail: any;
  discount: any;
  SGST: any;
  CGST: any;
  sgst_amount: number;
  cgst_amount: number;
  service_charge_amount: number;
  revised_total: number;


  constructor(private router: Router,
              private billService: BillingService,
              private userService: UserService,
              private modeService: ModeService,
              private branchService: BranchService,
              private fb:FormBuilder,
              private ui: LoaderService ) {
                this.userService.getRole().subscribe((res) =>{
                  this.role = res
                  console.log(res)
                }) 
              }

  ngOnInit(): void {
    this.getBillList()
    this.getAllUsers()
    // this.getTotalSales()
    this.getAllPaymentMode()
    this.getAllDeliveryMode()
    this.getBranchDetail()
    this.getDiscount()
  }


  onCustomerChange(){
   console.log(this.searchedName)
   this.getBillList()
  }


  getDiscount(){
    this.billService.getDiscount().subscribe((res) => {
      this.discount = res.data?.discount;
      this.SGST = res.data?.SGST
      this.CGST = res.data?.CGST
    })
  }

  printBill(item){
    this.showPrint = true
    this.printDetail = item
    this.revised_total = 0  
    if(this.printDetail?.delivery_mode === 'Dine-in' || this.printDetail?.delivery_mode === 'Dine-In') {

      for (let i of item.products) {
        this.revised_total += Number(i.price * i.quantity)
      }
      
      this.sgst_amount = Math.round((Number(this.SGST)/100)*this.revised_total)
      this.cgst_amount = Math.round((Number(this.CGST)/100)*this.revised_total)
      this.service_charge_amount = Math.round((Number(this.discount)/100)*this.revised_total)
    } 
    setTimeout(() => {
      
      let printContents, popupWin;
      printContents = document.getElementById('print-section').innerHTML;
      popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
  
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Print tab</title>
            <style>
            p{
              font-size:12px;
            }
            
            td,
            th,
            tr,
            table {
                font-size:14px;
                border-top: 1px solid black;
                border-collapse: collapse;
            }
            
            td.description,
            th.description {
                width: 85px;
                max-width: 85px;
            }

            td.total,
            th.total {
                width: 85px;
                max-width: 85px;
                font-size:11px;
            }
            
            td.quantity,
            th.quantity {
                width: 45px;
                max-width: 45px;
                word-break: break-all;
            }
            
            td.price,
            th.price {
                width: 45px;
                max-width: 45px;
                word-break: break-all;
            }

            td.t-price,
            th.t-price {
                width: 65px;
                max-width: 65px;
                word-break: break-all;
            }
            
            .centered {
                text-align: center;
                align-content: center;
            }
            
            .ticket {
                width: 268px;
                max-width: 268px;
            }
            
            </style>
          </head>
      <body onload="window.print();window.close()">${printContents}</body>
        </html>`
      );
      popupWin.document.close();
    },100)

    item.printed = 'Yes'
    this.billService.editBill(item.bill_id,item).subscribe((res) => {
      this.showPrint = false
    })

  }




  getAllPaymentMode = () => {
    this.modeService.getPaymentModeList().subscribe((res) => {
      if(res.data) {
        this.payment.push({id:'Net Banking', name: 'Net Banking'})
        let tempArr = res.data.map((item) => ({
           id: item.payment_mode_name,
           name: item.payment_mode_name
        }))
        this.payment = [...tempArr, ...this.payment]
        this.payment.push({id:'',name:'All'})
        
      } 
    })
  }



  getAllDeliveryMode = () => {
    this.modeService.getDeliveryModeList().subscribe((res) => {
      if(res.data) {
        this.delivery = res.data.map((item) => ({
           id: item.delivery_mode_name,
           name: item.delivery_mode_name
        }))
        this.delivery.push({id:'',name:'All'})
      } 
    })
  }



  addStatus(val){
    this.status = val
    console.log(this.status);
  }

  editStatus(val){
    this.detail.status = val
    console.log(this.status);
  }


  getAllUsers() {
    this.userService.getAllUsers(500,1).subscribe((res) => {
      this.userNameList.push({fullName: 'ALL'})
      let tempList = res.data.result.map((item) => ({
         fullName: `${item.firstName} ${item.lastName}`
      }))
      this.userNameList.push(...tempList)
      console.log(this.userNameList)
    })
  }

  // getTotalSales = () => {
  //   this.total = 0
  //   let data = {
  //     startDate:  moment(this.selectedStartDate).format('DD-MM-YYYY'),
  //     endDate: moment(this.selectedEndDate).format('DD-MM-YYYY'),
  //     payment_mode: this.selectedPaymentMode,
  //     delivery_mode: this.selectedDeliveryMode,
  //     createdOn: this.selectedDate,
  //     bill_by: this.selectedUserName
  //    }
  //    let filterStr = '';
  //    for (let item in data) {
  //       if(data[item]) {
  //         filterStr = `${filterStr}${item}=${data[item]}&`
  //       }
  //       }
  //    console.log(filterStr)
  //   this.billService.getTotalSale(filterStr).subscribe((res) => {
  //     if(res.data) {
  //       let totalArr = res.data;
  //       this.total = 0

  //       for(let i of totalArr) {
  //         this.total = this.total + i.total
  //       }
  //       console.log(this.total);
  //     } else {
  //       this.total = 0;
  //     }
  //   })
  // }


  getBranchDetail() {
    this.branchService.getBranchDetail('QtdSQrKuq').subscribe((res) => {
      if(res.data) {
        this.branchDetail = res.data
      }
    })
  }


  getBillList(page?:number) {
    if(page) {
      this.currentpage = page
     }
    let data = {
      startDate:  moment(this.selectedStartDate).format('DD-MM-YYYY'),
      endDate: moment(this.selectedEndDate).format('DD-MM-YYYY'),
      payment_mode: this.selectedPaymentMode,
      delivery_mode: this.selectedDeliveryMode,
      createdOn: this.selectedDate,
      user_name: this.selectedUserName,
      customer_name: this.searchedName
     }
     let filterStr = '';
     for (let item in data) {
        if(data[item]) {
          filterStr = `${filterStr}${item}=${data[item]}&`
        }
        }
     console.log(filterStr)
    this.ui.loader.show()
    this.billService.getBillingList(this.selectedPerPage,this.currentpage,filterStr).subscribe((res) => {
      this.billList = [];
      if(res.data) {
        this.billList = res.data.result.map((item) => ({
             date: moment(item.createdOn).format('YYYY-MM-DD'),
             ...item
        }))
        this.total = parseInt((res.data.total).split('-')[0]).toFixed(2)        
        if(res.data.result.length>0) {
        
          this.totalPage = (res.data.total).split('-')[1];
          console.log(this.totalPage)
        }
      } else {
        this.total = 0;
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  onOptionSelect(option, val) {
      if(option === 'payment') {
        this.selectedPaymentMode = val
      } else if(option === 'delivery') {
        this.selectedDeliveryMode = val
      } else if(option === 'user') {
        if(val === 'ALL') {
          this.selectedUserName = ''
         } else {
           this.selectedUserName = val
         }
      } else if(option === 'date') {
        this.selectedDate = val
      }
      this.getBillList()
      // this.getTotalSales()
  }

  onDateSelect(){
    if(!this.selectedStartDate) {
      swal.fire({
        icon: 'warning',
        title: 'Please Select Start Date',
        showConfirmButton: false,
        timer: 1500
      })
    } else if(!this.selectedEndDate) {
      swal.fire({
        icon: 'warning',
        title: 'Please Select End Date',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      this.getBillList()
      // this.getTotalSales()
    }
  }





  changedDate(date,val) {
    if(date === 'start'){
      this.selectedStartDate = val

    } else if(date === 'end') {
      this.selectedEndDate = val
    }
    console.log(this.selectedStartDate)
    console.log(this.selectedEndDate)
  }


  onLimitSelect = (val) => {


      this.selectedPerPage = val
    
    this.getBillList()
  }



  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.sortFields[field] = this.sortOrder;
    this.billList.sort((a, b) => {
      if (field === 'total_price') {
        return !this.sortOrder ? a[field] - b[field] : b[field] - a[field];
      } else {
        return !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      }
    });
  }


  deleteBill(index,id) {
    swal.fire({
      title: 'Do you want to delete this Bill?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.billService.deleteBill(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Bill Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.billList.splice(index,1)
        //  this.getTotalSales()
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
  }

  getBillDetail(id) {
    this.ui.loader.show()
    this.billService.getBillDetail(id).subscribe((res) => {
       if(res.data) {
         this.detail = res.data
         this.ui.loader.hide()
       }
    },err => this.ui.loader.hide())
  }

  editBill(id){
    this.ui.loader.show()
   delete this.detail.validationToken
   delete this.detail.createdOn
   this.billService.editBill(id, this.detail).subscribe((res) => {
    this.closeEditModal.nativeElement.click();
    this.detail = {};
    this.ui.loader.hide()
    this.getBillList()
   },err => {
    this.ui.loader.hide()
   })
    
  }

  payMode(val){
    this.selectedPaymentMode = val;
    if(this.selectedPaymentMode === 'All') {
      this.selectedPaymentMode = ''
    }
  }

  deliveryMode(val){
    this.selectedDeliveryMode = val;
    if(this.selectedDeliveryMode === 'All') {
      this.selectedDeliveryMode = ''
    }
  }

  onUserSelect(val){
    this.selectedUserName = val;
    if(this.selectedUserName === 'CLEAR SEARCH') {
      this.selectedUserName = ''
    }
  }






}
