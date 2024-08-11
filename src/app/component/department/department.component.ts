import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
declare var $;

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departmentList = [];
  public detail:any;
  public departmentName:string;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')


  @ViewChild('closeEditModal3') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;

  constructor(
    private router: Router,
    private foodService: FoodService,
    private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getAllDepartment()
  }



  getAllDepartment = () => {
    this.ui.loader.show()
    this.foodService.getDepartmentList().subscribe((res) => {
      if(res.data) {
        this.departmentList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getDepartmentDetail = (id) => {
    this.foodService.getSingleDepartment(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
      }
   })
  }

   deleteDepartment = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Department?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.foodService.deleteDepartment(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Department Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.departmentList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addDepartment = () => {
    this.ui.loader.show()
    const data = {
     name: this.departmentName
     }
     this.departmentList.push(data)
     this.foodService.createDepartment(data).subscribe((res) => {
      this.departmentName = '';
      this.closeAddModal.nativeElement.click();
       swal.fire({
        icon: 'success',
        title: 'Department Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllDepartment()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editDepartment = (id) => {
    this.ui.loader.show()
    delete this.detail.createdOn
    this.foodService.updateDepartment(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getAllDepartment()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.departmentList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }


}
