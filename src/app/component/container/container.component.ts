import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  public role = '';

  constructor(private userService: UserService) {
    this.userService.getRole().subscribe({next:result => {
      
      this.role = '';
      this.role = result
      console.log(this.role)
    }
    })
   }




}
