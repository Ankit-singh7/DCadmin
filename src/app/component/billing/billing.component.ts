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
  public selectedPaymentMode: any;
  public selectedDeliveryMode: any;
  public selectedUserName: any;
  public searchName: any;
  public selectedDate:any;
  public userNameList:any = [];
  public total: any;


  @ViewChild('closeEditModal') closeEditModal: ElementRef;


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
    this.userService.getAllUsers().subscribe((res) => {
      this.userNameList.push({fullName: 'CLEAR SEARCH'})
      let tempList = res.data.map((item) => ({
         fullName: `${item.firstName} ${item.lastName}`
      }))
      this.userNameList.push(...tempList)
      console.log(this.userNameList)
    })
  }

  getTotalSales = () => {
    this.billService.getTotalSale().subscribe((res) => {
      if(res.data) {
        this.total = res.data[0].total;
      } else {
        this.total = 0;
      }
    })
  }



  getBillList() {
    this.ui.loader.show()
    this.billService.getBillingList().subscribe((res) => {
      if(res.data) {
        this.billList = res.data.map((item) => ({
             date: moment(item.createdOn).format('YYYY-MM-DD'),
             ...item
        }))
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
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

  changedDate(e) {
    console.log(e)
  }





}
