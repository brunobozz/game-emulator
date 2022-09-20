import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from 'src/app/pipes/safe-pipe';

// COMPONENTS
import { GameInfoComponent } from './components/game-info/game-info.component';
import { GameScreensComponent } from './components/game-screens/game-screens.component';
import { GameRatingComponent } from './components/game-rating/game-rating.component';

@NgModule({
  declarations: [
    SafePipe,
    // COMPONENTS
    GameComponent,
    GameInfoComponent,
    GameScreensComponent,
    GameRatingComponent,
  ],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
})
export class GameModule {}
