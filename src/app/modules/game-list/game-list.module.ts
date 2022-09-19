import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// COMPONENTES
import { GameListComponent } from './game-list.component';
import { GameListTableComponent } from './components/game-list-table/game-list-table.component';
import { GameListFilterComponent } from './components/game-list-filter/game-list-filter.component';

@NgModule({
  declarations: [
    GameListComponent,
    GameListTableComponent,
    GameListFilterComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class GameListModule {}
