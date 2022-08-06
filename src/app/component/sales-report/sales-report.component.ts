import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import * as moment from 'moment';
import { FoodService } from 'src/app/service/food/food.service';
declare var $;
import swal from 'sweetalert2';
import { TemplateParseResult } from '@angular/compiler';
import { BillingService } from 'src/app/service/billing/billing.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  public name: any[] = [];
  public field: string;
  public sortOrder = false;
  public sortFields = {
    quantity:true,
    food_name:true,
  };
  public reportList = [];
  public response = 'No Data to Show';
  public selectedStartDate:any
  public selectedEndDate:any
  public total: any;


selectedPerPage = 10000;
currentpage: number = 1;
totalPage: number;
  
  
  
  @ViewChild('closeEditModal') closeEditModal: ElementRef;
  
  
  constructor(private router: Router,
              private foodService: FoodService,
              private billService: BillingService,
              private ui: LoaderService ) { }
  
  ngOnInit(): void {
     this.getAllReport()
  }
  
  

  

  
  
  getAllReport() {
   
     let data = {
      startDate:  moment(this.selectedStartDate).format('DD-MM-YYYY'),
      endDate:  moment(this.selectedEndDate).format('DD-MM-YYYY')
     }
     let filterStr = '';
     for (let item in data) {
        if(data[item]) {
          filterStr = `${filterStr}${item}=${data[item]}&`
        }
        }
    this.ui.loader.show()
    this.billService.getBillingList(this.selectedPerPage,this.currentpage,filterStr).subscribe((res) => {
      this.reportList = [];
      if(res.data) {
        let arr1 = JSON.parse(JSON.stringify(res.data.result))
        let reports = [];
        for(let item of arr1) {
          for(let product of item.products) {
            reports.push(product)
          }
        }
        
       let keyArr = reports.map((i) => i.food_id)
       for(let i = 0; i< reports.length;i++) {
        //  debugger
         let tempArr = reports.filter((item) => item.food_id === reports[i].food_id)
         console.log(tempArr)
         if(tempArr.length>1) {
           let newObj = JSON.parse(JSON.stringify(tempArr[0]))
           let quantity = 0;
           for(let j = 0; j<tempArr.length;j++) {
             quantity = quantity + tempArr[j].quantity
           }
           newObj.quantity = quantity;
           if(!this.reportList.some(item => item.food_id === newObj.food_id )) {

             this.reportList.push(Object.assign({}, newObj))
           } 
         } else {
           this.reportList.push(tempArr[0])
         }
       }
      //  this.totalPage = this.reportList.length;

     console.log(this.reportList)

      }
       this.ui.loader.hide()
    }, err => {
      this.ui.loader.hide()
    })
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
      // this.selectedStartDate = moment(this.selectedStartDate).format('DD-MM-YYYY')
      // this.selectedEndDate = moment(this.selectedEndDate).format('DD-MM-YYYY')
      this.getAllReport()
    }
  }

  onLimitSelect = (val) => {
    this.selectedPerPage = val
    this.getAllReport()
  }
  
  

  
  
  

  
  
  
  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.sortFields[field] = this.sortOrder;
    this.reportList.sort((a, b) => {
      if (field === 'quantity' || field === 'quantity') {
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
  