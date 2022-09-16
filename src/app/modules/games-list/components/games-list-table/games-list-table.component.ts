import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games-list-table',
  templateUrl: './games-list-table.component.html',
})
export class GamesListTableComponent {
  @Input() gamesList: any;
}
