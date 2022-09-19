import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';

// APP MODULES
import { HomeModule } from './modules/home/home.module';
import { CmdModule } from './modules/cmd/cmd.module';
import { GameModule } from './modules/game/game.module';
import { PlatformModule } from './modules/platform/platform.module';
import { GameListModule } from './modules/game-list/game-list.module';

@NgModule({
  declarations: [AppComponent, MainNavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CmdModule,
    GameModule,
    PlatformModule,
    GameListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
