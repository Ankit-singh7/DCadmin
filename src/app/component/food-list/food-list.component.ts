import { Component, OnInit, ElementRef, ViewChild, ResolvedReflectiveFactory } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {


  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  public foodList = [];
  public foodCategoryList = [];
  public status: string;
  public used: string;
  public detail:any;
  public ingredientName: string;
  public selectedCategory: string
  price: any;
  type: any;
  foodName: any;


  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;


 
  constructor(
    private router: Router,
    private foodService: FoodService,
    private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getFoodCatList()
    this.getFoodList()
  }


  getFoodCatList = () => {

    this.foodService.getFoodCategoryList().subscribe((res) => {
      if(res.data) {
        this.foodCategoryList = res.data
      } 

    },(err) => {
      console.log(err)
    })
  }


  getFoodList = () => {
    this.foodService.getFoodList().subscribe((res) => {
      if(res.data) {
        this.foodList = res.data
      }
    },(err) => {
      console.log(err)
    })
  }


  getFoodDetail = (id) => {
    this.foodService.getSingleFoodDetail(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
        console.log(this.detail)
        
      }
   })
  }

   deleteFood = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Food item?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.foodService.deleteFood(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Food item Deleted Successfully',
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

   addFood = () => {
    this.ui.loader.show()
    const data = {
     category_id: this.selectedCategory,
     name: this.foodName,
     price: Number(this.price),
     type: this.type,
     status: this.status,
     mostly_used: this.used
     }
     this.foodService.createFood(data).subscribe((res) => {
      this.closeAddModal.nativeElement.click();
      this.ingredientName = '';
      this.price = '';
      this.type = '';
      this.status = '';
       swal.fire({
        icon: 'success',
        title: 'Food item Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getFoodList()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editFood = (id) => {
    this.ui.loader.show()
    delete this.detail.validationToken
    delete this.detail.createdOn
    delete this.detail.sub_category_id
    this.foodService.updateFood(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getFoodList()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.foodList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }

  getSelectedCategory(val) {
    console.log(val);
  }

  getSelectedUnit(val) {
    console.log(val);
  }

  editStatus(val){
    this.detail.status = val
    console.log(this.status);
  }





  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }


}
