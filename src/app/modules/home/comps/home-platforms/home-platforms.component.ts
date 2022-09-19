import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-platforms',
  templateUrl: './home-platforms.component.html',
  styleUrls: ['./home-platforms.component.scss'],
})
export class HomePlatformsComponent {
  @Input() platforms: any;

  constructor(private router: Router) {}

  public letsPlatform(platform: string) {
    this.router.navigateByUrl('/platform/' + platform);
  }
}
