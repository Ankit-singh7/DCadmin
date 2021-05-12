import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import * as moment from 'moment';
import { FoodService } from 'src/app/service/food/food.service';
declare var $;
import swal from 'sweetalert2';


@Component({
  selector: 'app-ingredient-report',
  templateUrl: './ingredient-report.component.html',
  styleUrls: ['./ingredient-report.component.css']
})
export class IngredientReportComponent implements OnInit {

  public name: any[] = [];
  public field: string;
  public sortOrder = false;
  public sortFields = {
    ingredient:true,
    category: true,
    quantity_by_stock: true,
    quantity_by_order: true
  };
  public reportList = [];
  public response = 'No Data to Show';
  public selectedStartDate:any
  public selectedEndDate:any
  public total: any;
  
  
  
  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  
  
  constructor(private router: Router,
              private foodService: FoodService,
              private ui: LoaderService ) { }
  
  ngOnInit(): void {
     this.getAllReport()
  }
  
  

  

  
  
  getAllReport() {
    this.ui.loader.show()
    this.foodService.getAllReport().subscribe((res) => {
       if(res.data) {
         this.reportList = res.data
       }
       this.ui.loader.hide()
    }, err => {
      this.ui.loader.hide()
    })
  }

  onDateSelect(){
    if(this.selectedStartDate === undefined) {
      swal.fire({
        icon: 'warning',
        title: 'Please Select Start Date',
        showConfirmButton: false,
        timer: 1500
      })
    } else if(this.selectedEndDate === undefined) {
      swal.fire({
        icon: 'warning',
        title: 'Please Select End Date',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      
      this.ui.loader.show()
      this.foodService.getReportByDate(`${moment(this.selectedStartDate).format('YYYY-DD-MM')}T00:00:00.000Z`,`${moment(this.selectedEndDate).format('YYYY-DD-MM')}T00:00:00.000Z`).subscribe((res) => {
        this.reportList = []
         if(res.data) {
           this.reportList = []
           this.reportList = res.data
         }
         this.ui.loader.hide()
      }, err => {
        this.ui.loader.hide()
      })
    }
  }
  

  
  
  

  
  
  
  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.sortFields[field] = this.sortOrder;
    this.reportList.sort((a, b) => {
      if (field === 'quantity_by_order' || field === 'quantity_by_stock') {
        return !this.sortOrder ? a[field] - b[field] : b[field] - a[field];
      } else {
        return !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      }
    });
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
  
  

  
  
  
  
  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
  }
  
  }
  