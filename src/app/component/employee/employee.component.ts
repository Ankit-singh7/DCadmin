import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public servicepro = [];
  public branch = [];
  public serviceProName = [];
  public officeId: string;
  public selectedBranchId: string[] = [];
  public selectedServiceProId = [];
  public name: any[] = [];
  public response = 'Please select the required details.';
  public fromDate: string;
  public toDate: string;
  public field: string;
  public sortOrder = false;
  public selectAll = false;
  public oldBranchId: string;
  public LoadingText = 'abc';
  public max = new Date(Date.now() - 864e5);

  public reservices = [
    {fname:'Ankit',
     lname: 'Singh',
     completed_services:'2',
     reservices_causedby: '300',
     reservices_percent:'200'
    },
    {fname:'Ankit',
    lname: 'Singh',
    completed_services:'2',
    reservices_causedby: '300',
    reservices_percent:'200'
   },
   {fname:'Ankit',
   lname: 'Singh',
   completed_services:'2',
   reservices_causedby: '300',
   reservices_percent:'200'
  }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $(document).ready(() => {
      $('#sidebar').mCustomScrollbar({
          theme: 'minimal'
      });

      $('#sidebarCollapse').on('click', () => {
          $('#sidebar, #content').toggleClass('active');
          $('.collapse.in').toggleClass('in');
          $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
  });
    $(() => {
$('[data-toggle="popover"]').popover();
$('.popover-dismiss').popover({
trigger: 'focus'
});
$('.vv').click(() => {
$('.ss').show();
});
});
$(() => {
  $('[data-toggle="popover"]').popover();
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
});
  }

  getReserviceReports(){

  }

  getAllActiveServicePro(){

  }
  
  checkBranchId(){

  }

  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field;
    this.reservices.sort(
    (a, b) =>  !this.sortOrder ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]));
  }


  public onSelectAll() {
    if (!this.selectAll) {
    const selected = this.serviceProName.map(item => item.id);
    this.selectedServiceProId = selected;
    } else {
      this.selectedServiceProId = [];
    }
  }

  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.router.navigate(['/login']);
}


  

}
