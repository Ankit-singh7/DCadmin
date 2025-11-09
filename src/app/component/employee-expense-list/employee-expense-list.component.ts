import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';
import * as moment from 'moment';
import { BillingService } from 'src/app/service/billing/billing.service';
import { UserService } from 'src/app/service/user/user.service';
import { FormBuilder} from '@angular/forms';
import { ModeService } from 'src/app/service/mode/mode.service';
import { BranchService } from 'src/app/service/branch/branch.service';
import { EmployeeService } from 'src/app/service/employee/employee.service';




@Component({
  selector: 'app-employee-expense-list',
  templateUrl: './employee-expense-list.component.html',
  styleUrls: ['./employee-expense-list.component.css']
})
export class EmployeeExpenseListComponent implements OnInit {



  public field: string;
  public sortOrder = false;
  public sortFields = {
    createdOn:true,
    expense_amount: true,
    expense_reason:true,
    employee_name:true,
    total_expense_amount: true,
    drawer_balance: true,
    closing_balance: true,
    in_amount: true
  };

  public expenseList = [];
  public response = 'No Data to Show';
  public selectedBranchId:any;
  public total: any;
  public employeeList = [];
  public selectedEmployee;
  
  selectedStartDate: any;
  selectedEndDate: any;


  constructor(private router: Router,
              private employeeService: EmployeeService,
              private userService: UserService,
              private ui: LoaderService ) { 
              }

  ngOnInit(): void {
    this.getEmployeeExpenseList()
    this.getAllEmployee();
  }

  getAllEmployee = () => {
    this.userService.getAllUsers(500,1).subscribe((res) => {
      this.employeeList.push({fullName: 'ALL'})
      let tempList = res.data.result.map((item) => ({
         fullName: `${item.firstName} ${item.lastName}`,
         id: item.userId
      }))
      this.employeeList.push(...tempList)
    })
  }



  getEmployeeExpenseList() {
    let data:any = {
      startDate:  moment(this.selectedStartDate).format('DD-MM-YYYY'),
      endDate: moment(this.selectedEndDate).format('DD-MM-YYYY'),
      ...(this.selectedEmployee && this.selectedEmployee !=="undefined" ? { employee_id: this.selectedEmployee } : {})
     }
    //  if (this.selectedEmployee !== null && this.selectedEmployee !== undefined) {
    //   data.employee_id = this.selectedEmployee;
    // }
     let filterStr = '';
     console.log(data);
     for (let item in data) {
        if(data[item]) {
          filterStr = `${filterStr}${item}=${data[item]}&`
        }
        }
    this.ui.loader.show()
    this.employeeService.getEmployeeExpenseList(filterStr).subscribe((res) => {
      this.expenseList = [];
      if(res.data) {
        this.expenseList = res.data.result.map((item) => {
          let expenseReasons = '';
          let expenseAmounts = '';
          let totalInAmount = '';
          let totalExpenseAmount = 0;
        
          if (Array.isArray(item.expenses)) {
            // Handling new format (expenses array)
            expenseReasons = item.expenses.map((exp) => exp.expense_reason).join(', ');
            expenseAmounts = item.expenses.map((exp) => exp.expense_amount).join(' + ');
            totalInAmount = item.expenses.reduce((sum, exp) => sum + Number(exp.in_amount),0)
            totalExpenseAmount = item.expenses.reduce((sum, exp) => sum + Number(exp.expense_amount), 0);
          } else {
            // Handling old format (single values)
            expenseReasons = item.expense_reason || '';
            expenseAmounts = item.expense_amount ? String(item.expense_amount) : '';
            totalExpenseAmount = Number(item.expense_amount) || 0;
          }
        
          return {
            date: moment(item.createdOn).format('YYYY-MM-DD'),
            expense_reason: expenseReasons,
            expense_amount: expenseAmounts,
            in_amount: totalInAmount,
            closing_balance: item.expenses[0].closing_balance,
            drawer_balance: item.expenses[0].drawer_balance,
            total_expense_amount: totalExpenseAmount,
            ...item
          };
        });        
        this.total = this.expenseList.reduce((sum, curr) => {
            return sum = sum + Number(curr.total_expense_amount)
        },0)
      } else {
        this.total = 0;
      } 
      this.ui.loader.hide()
    },(err) => this.ui.loader.hide())
  }

  onOptionSelect(val) {
        if(val === 'ALL') {
          this.selectedEmployee = null
         } else {
           this.selectedEmployee = val
         }
      this.getEmployeeExpenseList()
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
      this.getEmployeeExpenseList()
    }
  }





  changedDate(date,val) {
    if(date === 'start'){
      this.selectedStartDate = val

    } else if(date === 'end') {
      this.selectedEndDate = val
    }
  }


  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.sortFields[field] = this.sortOrder;
    this.expenseList.sort((a, b) => {
      if (field === 'total_price') {
        return !this.sortOrder ? a[field] - b[field] : b[field] - a[field];
      } else {
        return !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      }
    });
  }
}
