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

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.route = event.url;
      }
    });
  }

  public back(): void {
    this.location.back();
  }
}
