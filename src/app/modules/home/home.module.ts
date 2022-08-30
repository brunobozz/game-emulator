import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeSidebarComponent } from './comps/home-sidebar/home-sidebar.component';
import { HomeHighlightsComponent } from './comps/home-highlights/home-highlights.component';
import { HomeShelfComponent } from './comps/home-shelf/home-shelf.component';

@NgModule({
  declarations: [HomeComponent, HomeSidebarComponent, HomeHighlightsComponent, HomeShelfComponent],
  imports: [CommonModule],
})
export class HomeModule {}
