import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamesListComponent } from './games-list.component';
import { GamesListTableComponent } from './components/games-list-table/games-list-table.component';
import { GamesListFilterComponent } from './components/games-list-filter/games-list-filter.component';
import { RouterModule } from '@angular/router';
import { GamesListSearchComponent } from './components/games-list-search/games-list-search.component';

@NgModule({
  declarations: [
    GamesListComponent,
    GamesListTableComponent,
    GamesListFilterComponent,
    GamesListSearchComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class GamesListModule {}
