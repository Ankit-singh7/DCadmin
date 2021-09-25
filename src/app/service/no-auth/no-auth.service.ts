import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthService implements CanActivate {
 role = '';
  constructor(private router: Router, private userService: UserService) { 
    this.userService.getRole().subscribe((res) => {
      this.role = res
    })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        // logged in so return true
        return true;
    } else  {
      if(this.role === 'admin') {
        this.router.navigate(['/user/employee']);
      } else if(this.role === 'operator') {
        this.router.navigate(['/user/billing']);

      }
    // not logged in so redirect to login page with the return url and return false
    
      return false;
    }
}

}
