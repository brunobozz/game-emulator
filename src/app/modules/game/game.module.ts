import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SafePipe } from 'src/app/pipes/safe-pipe';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { GameScreensComponent } from './components/game-screens/game-screens.component';

@NgModule({
  declarations: [GameComponent, SafePipe, GameInfoComponent, GameScreensComponent],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
})
export class GameModule {}
