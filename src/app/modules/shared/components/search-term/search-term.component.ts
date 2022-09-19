import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-term',
  templateUrl: './search-term.component.html',
})
export class SearchTermComponent {
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
