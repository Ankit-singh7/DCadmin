import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  public groupId: string;
  constructor() {}
  ngOnInit() {
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
}
