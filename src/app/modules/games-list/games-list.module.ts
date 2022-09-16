import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list.component';
import { GamesListTableComponent } from './components/games-list-table/games-list-table.component';
import { GamesListFilterComponent } from './components/games-list-filter/games-list-filter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GamesListComponent,
    GamesListTableComponent,
    GamesListFilterComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class GamesListModule {}
