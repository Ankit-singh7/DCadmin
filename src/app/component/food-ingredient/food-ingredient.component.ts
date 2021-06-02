import { Component, OnInit, ElementRef, ViewChild, ResolvedReflectiveFactory } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';



declare var $;


@Component({
  selector: 'app-food-ingredient',
  templateUrl: './food-ingredient.component.html',
  styleUrls: ['./food-ingredient.component.css']
})
export class FoodIngredientComponent implements OnInit {
  public subId:any;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')
  public ingredientList = [];
  public mainIngrdientList = [];
  public unitList = [];
  public categoryList = [];
  public foodIngredientList = [];
  public firstName: string;
  public lastName: string;
  public email:string;
  public password: string;
  public phone: string;
  public status: string;
  public detail:any;
  public quantity: string;
  public selectedCategory: string;
  public selectedUnit: string;
  public selectedIngredient:any;


  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;


  constructor(
    private router: Router,
    private foodService: FoodService,
    private route: ActivatedRoute,
    private ui: LoaderService ) { 
      this.route.queryParams.subscribe((params) => {
        this.subId = params['id']
        this.getFoodIngredientList(this.subId);
        
      })
      console.log(this.subId)
    }

  ngOnInit(): void {
    this.getIngredientList()
    this.getAllCategory()
    this.getAllUnit()
  }


  getAllUnit = () => {

    this.foodService.getUnitList().subscribe((res) => {
      if(res.data) {
        this.unitList = res.data
      } 

    },(err) => {
      console.log(err)
    })
  }

  getAllCategory = () => {
     this.foodService.getIngredientCategoryList(500,1).subscribe((res) => {
       if(res.data) {
         this.categoryList = res.data.result        
       }
     },(err) => {
      console.log(err)
    })
  }

  getIngredientList = () => {
    this.foodService.getIngredientList(500,1).subscribe((res) => {
      if(res.data) {
        this.ingredientList = res.data.result
        this.mainIngrdientList = res.data.result

      }
    },(err) => {
      console.log(err)
    })
  }

  // getselectedIngredient() {
  //     if(this.selectedCategory) {
  //         console.log(this.selectedCategory)
  //         this.ingredientList = this.mainIngrdientList
  //         this.ingredientList = this.ingredientList.filter((item) =>  item.category_id === this.selectedCategory)

  //       }

  // }

  getFoodIngredientList = (id) => {
    this.foodService.getFoodIngredientList(id).subscribe((res) => {
      if(res.data) {
        this.foodIngredientList = res.data
      }
    },(err) => {
      console.log(err)
    })
  }




  getIngredientDetail = (id) => {
    this.foodService.getSingleFoodIngredient(id).subscribe((res) => {
      if(res.data) {
        this.detail = res.data
        console.log(this.detail)
        
      }
   })
  }

   deleteIngredient = (index, id) => {
    swal.fire({
      title: 'Do you want to delete this Ingredient?',
      showCancelButton: true,
      confirmButtonText: `YES`,
      cancelButtonText: `CANCEL`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ui.loader.show()
        this.foodService.deleteFoodIngredient(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Ingredient Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.foodIngredientList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addIngredient = () => {
    this.ui.loader.show()
    const data = {
     sub_category_id:this.subId,
     category_id: this.selectedIngredient.category_id,
     unit_id: this.selectedIngredient.unit_id,
     ingredient_id: this.selectedIngredient.ingredient_id,
     quantity: this.quantity
     }
     this.foodService.createFoodIngredient(data).subscribe((res) => {
      this.closeAddModal.nativeElement.click();
      this.quantity = '';
      this.selectedUnit = '';
      this.selectedCategory = '';
      this.selectedIngredient = '';
       swal.fire({
        icon: 'success',
        title: 'Ingredient Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getFoodIngredientList(this.subId)
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editIngredient = (id) => {
    this.ui.loader.show()
    delete this.detail.validationToken
    delete this.detail.createdOn
    this.foodService.updateFoodIngredient(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getFoodIngredientList(this.subId)
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.ingredientList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }

  getSelectedIngredient(val) {
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
