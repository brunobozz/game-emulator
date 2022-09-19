import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformComponent } from './platform.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PlatformGameListComponent } from './components/platform-game-list/platform-game-list.component';
import { PlatformGameFilterComponent } from './components/platform-game-filter/platform-game-filter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PlatformComponent,
    PlatformGameListComponent,
    PlatformGameFilterComponent,
  ],
  imports: [CommonModule, AppRoutingModule, HttpClientModule, SharedModule],
})
export class PlatformModule {}
