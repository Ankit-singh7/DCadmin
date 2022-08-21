import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/service/billing/billing.service';
import { UserService } from 'src/app/service/user/user.service';
declare var $;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  public groupId: string;
  public role = '';
  discount = 0;
  SGST = 0;
  CGST = 0;
  loading = false;
  @ViewChild('closeAddModal') closeAddModal: ElementRef;
  constructor(private route: Router,private userService: UserService, private billService: BillingService) {
    this.userService.getRole().subscribe((res) => {
      this.role = '';
      this.role = res
      console.log(res)
    })
  }
  ngOnInit() {
    this.userService.getRole().subscribe((res) => {
      this.role = res
    })
  }

  

  ngAfterViewChecked(){
    this.userService.getRole().subscribe((res) => {
      this.role = res
    })
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
  }


  logout(){
    localStorage.setItem('isLoggedIn', String(false));
    this.route.navigate(['/login']);
  }

  getDiscount(){
    this.loading = true
    this.billService.getDiscount().subscribe((res) => {
      this.discount = res.data?.discount;
      this.SGST = res.data?.SGST
      this.CGST = res.data?.CGST
      this.loading = false
    },err => this.loading = false)
  }

  update_discount(){
    let data = {
      discount: this.discount,
      SGST: this.SGST,
      CGST: this.CGST
    }
    this.billService.updateDiscount(data).subscribe((res) => {
      this.closeAddModal.nativeElement.click();
    })
  }
}
