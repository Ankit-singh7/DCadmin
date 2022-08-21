import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipe/filter.pipe';
import { HeaderComponent } from './header/header.component';
import { NavbarTwoComponent } from './navbar-two/navbar-two.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [NavbarComponent,FilterPipe, HeaderComponent, NavbarTwoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [NavbarComponent, FilterPipe, HeaderComponent, NavbarTwoComponent]
})
export class SharedModule { }
