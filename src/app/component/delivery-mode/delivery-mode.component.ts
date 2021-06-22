import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ModeService } from 'src/app/service/mode/mode.service';
declare var $;

@Component({
  selector: 'app-delivery-mode',
  templateUrl: './delivery-mode.component.html',
  styleUrls: ['./delivery-mode.component.css']
})
export class DeliveryModeComponent implements OnInit {

  public modeList = [];
  public detail:any;
  public deliveryName:string;
  public is_banking = 'false';
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')


  @ViewChild('closeEditModal3') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;

  constructor(
    private router: Router,
    private modeService: ModeService,
    private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getAllDeliveryMode()
  }



  getAllDeliveryMode = () => {
    this.ui.loader.show()
    this.modeService.getDeliveryModeList().subscribe((res) => {
      if(res.data) {
        this.modeList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getDeliveryModeDetail = (id) => {
    this.modeService.getDeliveryModeDetail(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
      }
   })
  }

   deleteMode = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Delivery Mode?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.modeService.deleteDeliveryMode(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Delivery Mode Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.modeList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addMode = () => {
    this.ui.loader.show()
    const data = {
     name: this.deliveryName,
     status: this.is_banking
     }
     this.modeList.push(data)
     this.modeService.createDeliveryMode(data).subscribe((res) => {
      this.deliveryName = '';
      this.closeAddModal.nativeElement.click();
       swal.fire({
        icon: 'success',
        title: 'Delivery Mode Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllDeliveryMode()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editMode = (id) => {
    this.ui.loader.show()
    this.modeService.updatePaymentMode(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getAllDeliveryMode()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.modeList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }



}
