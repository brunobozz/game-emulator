import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SafePipe } from 'src/app/pipes/safe-pipe';
import { GameInfoComponent } from './components/game-info/game-info.component';

@NgModule({
  declarations: [GameComponent, SafePipe, GameInfoComponent],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
})
export class GameModule {}
