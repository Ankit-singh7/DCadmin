import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

declare var $;
@Component({
  selector: 'app-ingredient-cat',
  templateUrl: './ingredient-cat.component.html',
  styleUrls: ['./ingredient-cat.component.css']
})
export class IngredientCatComponent implements OnInit {

  public ingredientCatList = [];
  public detail:any;
  public catName:string;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')


  @ViewChild('closeEditModal2') closeEditModal: ElementRef;

  @ViewChild('closeAddModal') closeAddModal: ElementRef;

  constructor(
    private router: Router,
    private foodService: FoodService,
    private ui: LoaderService ) { }

  ngOnInit(): void {
    this.getAllIngredientCat()
  }


  getAllIngredientCat = () => {
    this.ui.loader.show()
    this.foodService.getIngredientCategoryList().subscribe((res) => {
      if(res.data) {
        this.ingredientCatList = res.data
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }


  getCategoryDetail = (id) => {
    this.foodService.getSingleIngredientCategory(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
      }
   })
  }

   deleteCategory = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Category?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.foodService.deleteIngredientCategory(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Category Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.ingredientCatList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addCategory = () => {
    this.ui.loader.show()
    const data = {
     name: this.catName
     }
     this.ingredientCatList.push(data)
     this.foodService.createIngredientCategory(data).subscribe((res) => {
      this.closeAddModal.nativeElement.click();
      this.catName = '';
       swal.fire({
        icon: 'success',
        title: 'Category Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllIngredientCat()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editCategory = (id) => {
    this.ui.loader.show()
    delete this.detail.validationToken
    delete this.detail.createdOn
    delete this.detail.ingredient_category_id
    this.foodService.updateIngredientCategory(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getAllIngredientCat()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.ingredientCatList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }


}
