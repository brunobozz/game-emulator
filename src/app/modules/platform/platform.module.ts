import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformComponent } from './platform.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PlatformNavbarComponent } from './components/platform-navbar/platform-navbar.component';
import { PlatformGameListComponent } from './components/platform-game-list/platform-game-list.component';
import { PlatformGameFilterComponent } from './components/platform-game-filter/platform-game-filter.component';

@NgModule({
  declarations: [PlatformComponent, PlatformNavbarComponent, PlatformGameListComponent, PlatformGameFilterComponent],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
})
export class PlatformModule {}
