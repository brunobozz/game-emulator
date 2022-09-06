import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
})
export class MainNavbarComponent implements OnInit {
  public route: any;

  constructor(private location: Location, private router: Router) {
    this.route = window.location.pathname;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      // if (event instanceof NavigationStart) {
      //   console.log('Route change detected');
      // }

      if (event instanceof NavigationEnd) {
        this.route = event.url;
        console.log(event.url);
      }
    });
  }

  public back(): void {
    this.location.back();
  }
}
