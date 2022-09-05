import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';

// APP MODULES
import { HomeModule } from './modules/home/home.module';
import { CmdModule } from './modules/cmd/cmd.module';
import { GameModule } from './modules/game/game.module';
import { PlatformModule } from './modules/platform/platform.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, CmdModule, GameModule, PlatformModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
