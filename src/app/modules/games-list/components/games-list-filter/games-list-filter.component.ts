import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-games-list-filter',
  templateUrl: './games-list-filter.component.html',
})
export class GamesListFilterComponent {
  @Output() filter = new EventEmitter();

  public sortBy(sort: string) {
    this.filter.emit(sort);
  }
}
