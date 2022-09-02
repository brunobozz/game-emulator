import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmdComponent } from './cmd.component';
import { CmdGameComponent } from './routes/cmd-game/cmd-game.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CmdGamesListComponent } from './components/cmd-games-list/cmd-games-list.component';
import { CmdGamesFormComponent } from './components/cmd-games-form/cmd-games-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CmdComponent,
    CmdGameComponent,
    CmdGamesListComponent,
    CmdGamesFormComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      maxOpened: 2,
      autoDismiss: true,
      preventDuplicates: true,
    }),
  ],
})
export class CmdModule {}
