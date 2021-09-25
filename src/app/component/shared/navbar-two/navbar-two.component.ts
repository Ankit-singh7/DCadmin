import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
declare var $;
@Component({
  selector: 'app-navbar-two',
  templateUrl: './navbar-two.component.html',
  styleUrls: ['./navbar-two.component.css']
})
export class NavbarTwoComponent implements OnInit, AfterViewInit {

  public groupId: string;
  public role = '';
  constructor(private route: Router,private userService: UserService) {
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
}
