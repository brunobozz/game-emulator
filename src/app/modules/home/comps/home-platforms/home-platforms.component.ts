import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-platforms',
  templateUrl: './home-platforms.component.html',
  styleUrls: ['./home-platforms.component.scss'],
})
export class HomePlatformsComponent implements OnInit {
  @Input() platforms: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public letsPlatform(platform: string) {
    this.router.navigateByUrl('/platform/' + platform);
  }
}
