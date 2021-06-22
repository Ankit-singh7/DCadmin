import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public name: any[] = [];
  public fullName = localStorage.getItem('name')
  public activatedRoute = window.location.pathname;
  public title:string

  public groupId: string;
  constructor(private route: Router) {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = '';
        this.activatedRoute = window.location.pathname;
        if(this.activatedRoute === '/user/employee') {
          this.title = 'EMPLOYEE LIST'
        }
        if(this.activatedRoute === '/user/ingredient-cat') {
          this.title = 'INGREDIENT TYPE LIST'
        }
        if(this.activatedRoute === '/user/unit') {
         this.title = 'UNIT LIST'
        }
        if(this.activatedRoute === '/user/ingredient') {
         this.title = 'INGREDIENT LIST'
        }
        if(this.activatedRoute === '/user/food-cat') {
         this.title = 'FOOD CAT LIST'
        }
        if(this.activatedRoute === '/user/food-list') {
          this.title = 'FOOD LIST'
         }
         if(this.activatedRoute === '/user/food-ing') {
          this.title = 'INGREDIENT LIST'
         }
         if(this.activatedRoute === '/user/billing') {
          this.title = 'BILLING LIST'
         }
         if(this.activatedRoute === '/user/session') {
          this.title = 'SESSION LIST'
         }
         if(this.activatedRoute === '/user/report') {
          this.title = 'INGREDIENT REPORT'
         }
         if(this.activatedRoute === '/user/sales-report') {
          this.title = 'SALES REPORT'
         }
         if(this.activatedRoute === '/user/payment') {
          this.title = 'PAYMENT MODE LIST'
         }
         if(this.activatedRoute === '/user/delivery') {
          this.title = 'DELIVERY MODE LIST'
         }
         if(this.activatedRoute === '/user/sm') {
          this.title = 'STOCK MANAGER LIST'
         }
         if(this.activatedRoute === '/user/stock-list') {
          this.title = 'STOCK LIST'
         }
         if(this.activatedRoute === '/user/stock-in') {
          this.title = 'STOCK IN LIST'
         }
         if(this.activatedRoute === '/user/stock-out') {
          this.title = 'STOCK OUT LIST'
         }
         if(this.activatedRoute === '/user/change-pass') {
          this.title = 'CHANGE PASSWORD'
         }
      }
    })
  }


  logout = () => {
    localStorage.setItem('isLoggedIn', String(false));
    this.route.navigate(['/login']);
  }

}
