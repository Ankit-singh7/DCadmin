import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';
import * as moment from 'moment';
import { BillingService } from 'src/app/service/billing/billing.service';
import { UserService } from 'src/app/service/user/user.service';


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
  public searchName = '';
  public selectedDate = '';
  public userNameList:any = [];
  public total: any;


  selectedPerPage = 10;
  currentpage: number = 1;
  totalPage: number;


  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  selectedStartDate: any;
  selectedEndDate: any;


  constructor(private router: Router,
              private billService: BillingService,
              private userService: UserService,
              private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getBillList()
    this.getAllUsers()
    this.getTotalSales()
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

  getTotalSales = () => {
    this.total = 0
    let data = {
      startDate:  moment(this.selectedStartDate).format('DD-MM-YYYY'),
      endDate: moment(this.selectedEndDate).format('DD-MM-YYYY'),
      payment_mode: this.selectedPaymentMode,
      delivery_mode: this.selectedDeliveryMode,
      createdOn: this.selectedDate,
      bill_by: this.selectedUserName
     }
     let filterStr = '';
     for (let item in data) {
        if(data[item]) {
          filterStr = `${filterStr}${item}=${data[item]}&`
        }
        }
     console.log(filterStr)
    this.billService.getTotalSale(filterStr).subscribe((res) => {
      if(res.data) {
        let totalArr = res.data;
        this.total = 0

        for(let i of totalArr) {
          this.total = this.total + i.total
        }
        console.log(this.total);
      } else {
        this.total = 0;
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
      user_name: this.selectedUserName
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

        this.totalPage = res.data.total
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
      this.getTotalSales()
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
      this.getTotalSales()
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
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
  }

  getBillDetail(id) {
    this.billService.getBillDetail(id).subscribe((res) => {
       if(res.data) {
         this.detail = res.data
       }
    })
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
