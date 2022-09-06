import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeSidebarComponent } from './comps/home-sidebar/home-sidebar.component';
import { HomeHighlightsComponent } from './comps/home-highlights/home-highlights.component';
import { HomeShelfComponent } from './comps/home-shelf/home-shelf.component';
import { HomePlatformsComponent } from './comps/home-platforms/home-platforms.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSidebarComponent,
    HomeHighlightsComponent,
    HomeShelfComponent,
    HomePlatformsComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class HomeModule {}
