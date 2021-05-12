import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import swal from 'sweetalert2';
import * as moment from 'moment';
import { BillingService } from 'src/app/service/billing/billing.service';
import { UserService } from 'src/app/service/user/user.service';
import { SessionService } from 'src/app/service/session/session.service';
declare var $;

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {



public name: any[] = [];
public field: string;
public sortOrder = false;
public sortFields = {
  user_name:true,
  session_amount: true,
  withdrawn: true
};

public fullName = localStorage.getItem('name')
public sessionList = [];
public firstName: string;
public lastName: string;
public email:string;
public password: string;
public phone: string;
public status: string;
public response = 'No Data to Show';
public detail:any;
public selectedUserName: any;
public selectedDate:any;
public userNameList:any = [];
public total: any;



@ViewChild('closeEditModal') closeEditModal: ElementRef;


constructor(private router: Router,
            private sessionService: SessionService,
            private billService: BillingService,
            private userService: UserService,
            private ui: LoaderService ) { }

ngOnInit(): void {
  this.getSessionList()
  this.getAllUsers()
  this.getTotalSales()
}


addStatus(val){
  this.status = val
  console.log(this.status);
}

editStatus(val){
  this.detail.status = val
  console.log(this.status);
}


getAllUsers() {
  this.userService.getAllUsers().subscribe((res) => {
    this.userNameList.push({fullName: 'CLEAR SEARCH'})
    let tempList = res.data.map((item) => ({
       fullName: `${item.firstName} ${item.lastName}`
    }))
    this.userNameList.push(...tempList)
    console.log(this.userNameList)
  })
}

getTotalSales = () => {
  this.billService.getTotalSale().subscribe((res) => {
    if(res.data) {
      this.total = res.data[0].total;
    } else {
      this.total = 0;
    }
  })
}



getSessionList() {
  this.ui.loader.show()
  this.sessionService.getSessionList().subscribe((res) => {
    if(res.data) {
      this.sessionList = res.data.map((item) => ({
           date: moment(item.createdOn).format('YYYY-MM-DD'),
           ...item
      }))
    } 
    this.ui.loader.hide()
  },(err) => this.ui.loader.hide())
}



public changeOrder(field) {
  this.sortOrder = !this.sortOrder;
  this.field = field;
  this.sortFields[field] = this.sortOrder;
  this.sessionList.sort((a, b) => {
    if (field === 'withdrawn' || field === 'session_amount') {
      return !this.sortOrder ? a[field] - b[field] : b[field] - a[field];
    } else {
      return !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
    }
  });
}



onUserSelect(val){
  this.selectedUserName = val;
  if(this.selectedUserName === 'CLEAR SEARCH') {
    this.selectedUserName = ''
  }
}

changedDate(e) {
  console.log(e)
}





logout = () => {
  localStorage.setItem('isLoggedIn', String(false));
  this.router.navigate(['/login']);
}

}
