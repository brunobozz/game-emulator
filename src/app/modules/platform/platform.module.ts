import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformComponent } from './platform.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [PlatformComponent],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
})
export class PlatformModule {}
