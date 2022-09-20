import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-screens',
  templateUrl: './game-screens.component.html',
  styleUrls: ['./game-screens.component.scss'],
})
export class GameScreensComponent {
  @Input() screens: any;
}
