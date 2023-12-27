import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

declare var $;

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css']
})
export class FoodCategoryComponent implements OnInit {

  private searchTerms = new Subject<string>();
  public foodCatList = [];
  public detail:any;
  public foodCatName:string;
  public name: any[] = [];
  public response = 'No Data Found';
  public field: string;
  public sortOrder = false;
  public fullName = localStorage.getItem('name')

  selectedPerPage = 10;
  currentpage: number = 1;
  total: number;


  @ViewChild('closeEditModal2') closeEditModal: ElementRef;

  @ViewChild('closeAddModal') closeAddModal: ElementRef;

  constructor(
    private router: Router,
    private foodService: FoodService,
    private ui: LoaderService ) {
      this.searchTerms
      .pipe(
        debounceTime(500), // Wait for 300 milliseconds after the last event
        distinctUntilChanged(), // Only proceed if the search term has changed
        switchMap((term: string) => this.foodService.getFoodCategoryByName(term))
      )
      .subscribe((data) => {
        // Process the data from the API
        console.log(data);
        this.foodCatList = JSON.parse(JSON.stringify(data.data));
      });
     }

  ngOnInit(): void {
    this.getAllFoodCat()
  }

  search(term: string): void {
    // Push the search term into the observable stream
    this.searchTerms.next(term);
  }




  getAllFoodCat = (page?:number) => {
    this.ui.loader.show()
    if(page) {

      this.currentpage = page
    }
    this.foodService.getFoodCategoryList(this.selectedPerPage,this.currentpage).subscribe((res) => {
      if(res.data) {
        this.foodCatList = res.data.result
        this.total = res.data.total
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }

  onLimitSelect = (val) => {
    this.selectedPerPage = val
    this.getAllFoodCat()
  }


  getCategoryDetail = (id) => {
    this.foodService.getSingleFoodCategory(id).subscribe((res) => {
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
        this.foodService.deleteFoodCategory(id).subscribe((res) => {
          swal.fire({
            icon: 'success',
            title: 'Category Deleted Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         this.foodCatList.splice(index,1)
          this.ui.loader.hide()
        }, err => this.ui.loader.hide())
      } else if (result.isDenied) {
       
      }
    })
   }

   addCategory = () => {
    this.ui.loader.show()
    const data = {
     name: this.foodCatName
     }
     this.foodCatList.push(data)
     this.foodService.createFoodCategory(data).subscribe((res) => {
      this.closeAddModal.nativeElement.click();
      this.foodCatName = '';
       swal.fire({
        icon: 'success',
        title: 'Category Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.getAllFoodCat()
       this.ui.loader.hide()
     },err => this.ui.loader.hide())

   }

   editCategory = (id) => {
    this.ui.loader.show()
    delete this.detail.validationToken
    delete this.detail.createdOn
    delete this.detail.category_id
    this.foodService.updateFoodCategory(id, this.detail).subscribe((res) => {
     this.closeEditModal.nativeElement.click();
     this.detail = {};
     this.ui.loader.hide()
     this.getAllFoodCat()
    },err => {
     this.ui.loader.hide()
    })
   }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.foodCatList.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }

}
