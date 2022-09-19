import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games-list-search',
  templateUrl: './games-list-search.component.html',
  styleUrls: ['./games-list-search.component.scss'],
})
export class GamesListSearchComponent {
  @Output() searchTerm = new EventEmitter();
  public term: string = '';

  public changeTerm() {
    this.searchTerm.emit(this.term.toLowerCase());
  }

  public cleanSearch() {
    this.term = '';
    this.changeTerm();
  }
}
