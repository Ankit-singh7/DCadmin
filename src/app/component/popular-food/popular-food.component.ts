import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from 'src/app/service/branch/branch.service';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { UserService } from 'src/app/service/user/user.service';
import swal from 'sweetalert2';
declare var $;
import { fromEvent } from 'rxjs';
import { map, switchMap, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-popular-food',
  templateUrl: './popular-food.component.html',
  styleUrls: ['./popular-food.component.css']
})
export class PopularFoodComponent implements OnInit {
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  public foodList = [];
  public data = {
    food_name:'',
    price:'',
    food_type:''
  }
  public hours = [];
  public minutes = [];
  public phone: string;

  public detail:any;


  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;
  @ViewChild('branchName') branchName: ElementRef;
  designation: any;
  bname = '';

  constructor(private router: Router,
              private branchService: BranchService,
              private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getFoodList();
  }



  titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
   return sentence;
 }




 getFoodList(){
 

    this.branchService.getFoodList().subscribe((res) => {
      if(res.data) {
        this.foodList = res.data
      } else {
        this.foodList = [];
      }
    })
  }







  addFood(){
    this.ui.loader.show()

      this.branchService.addFood(this.data).subscribe((res) => {
      this.data.food_name = '';
      this.data.price = '';
      this.data.food_type = '';
       swal.fire({
        icon: 'success',
        title: 'Food Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getFoodList();
      this.closeAddModal.nativeElement.click();
       this.ui.loader.hide()
     },err => this.ui.loader.hide())
  }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.foodList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }

  deleteFood(index,id) {
    swal.fire({
      title: 'Do you want to delete this Popular Food?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.branchService.deleteFood(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Food Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.foodList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
  }

  getfoodDetail(id) {
    this.branchService.getFoodDetail(id).subscribe((res) => {
       if(res.data) {
         this.detail = res.data
       }
    })
  }

  editFood(id){
    this.ui.loader.show()  
   this.branchService.editFood(id, this.detail).subscribe((res) => {
    this.closeEditModal.nativeElement.click();
    this.detail = {};
    this.ui.loader.hide()
    this.getFoodList()
   },err => {
    this.ui.loader.hide()
   })
    
  }

  changeFoodType(val){
     this.data.food_type = val;
  }






  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }



}
