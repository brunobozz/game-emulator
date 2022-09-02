import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-shelf',
  templateUrl: './home-shelf.component.html',
  styleUrls: ['./home-shelf.component.scss'],
})
export class HomeShelfComponent {
  @Input() items: any;
  @Input() logo?: string;
  @Input() title?: string;
  @Input() size?: string;

  constructor(private router: Router) {}

  public letsGame(id: string) {
    console.log(id);
    this.router.navigateByUrl('/game/' + id);
  }
}
