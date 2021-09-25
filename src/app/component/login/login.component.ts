import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/service/loader/loader.service';
import { UserService } from 'src/app/service/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public rememberMe = 'false';
  public showPassword = false;
  public inputType = 'password';
  public message: any;
  public header: any;
  cookieRem: any;
  cookiePass: string;
  cookieMail: string;
  loginError = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ui: LoaderService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.remember()
  }

  login() {
    this.ui.loader.show()
    const data = {
      email:this.email,
      password: this.password,
      }
        this.userService.login(data).subscribe((res) => {
          this.userService.setRole(res.data.role)         
          this.loginError =  false;
          localStorage.setItem('token', res.data.authToken);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('name',`${res.data.firstName} ${res.data.lastName}`) 
          if (this.rememberMe) {
            localStorage.setItem('email', this.email);
            localStorage.setItem('password', this.password);
            localStorage.setItem('rememberMe', String(this.rememberMe));
          } else  {
            this.email = '';
            this.password = '';
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.setItem('rememberMe', String(this.rememberMe));
          }


          this.userService.getRole().subscribe((res) => {
            console.log(res)
            if(res === 'admin') {
              this.router.navigate(['/user/employee'])
              window.location.reload()
            } else if(res === 'operator') {
              this.router.navigate(['/user/billing'])
              window.location.reload()
            }
          })

          // if(res.data.role === 'admin') {
          //   setTimeout(() => {

          //     this.router.navigate(['/user/employee'])
          //   },1000)
            
          // } else if(res.data.role === 'operator') {
          //   setTimeout(() => {

          //     this.router.navigate(['/user/billing'])
          //   },1000)
          // }

           this.ui.loader.hide()
        
      },(error) => {
        this.ui.loader.hide()
        this.loginError = true;
        this.message = error.error.message;

  
      })
  }


  remember() {
    if (localStorage.getItem('rememberMe') === 'true') {
      this.cookieRem = Boolean(localStorage.getItem('rememberMe'));
      this.cookiePass = localStorage.getItem('password');
      this.cookieMail = localStorage.getItem('email');
      if (this.router.navigate(['/login'])) {
        this.rememberMe = this.cookieRem;
        this.email = this.cookieMail;
        this.password = this.cookiePass;
      }
    } else if(localStorage.getItem('rememberMe') === 'false') {
      this.cookieRem = false;
      this.email = '';
      this.password = '';
    }
  }


}
