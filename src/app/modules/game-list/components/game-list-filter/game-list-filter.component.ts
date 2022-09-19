import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
})
export class GameListFilterComponent {
  @Output() filter = new EventEmitter();

  public sortBy(sort: string) {
    this.filter.emit(sort);
  }
}
