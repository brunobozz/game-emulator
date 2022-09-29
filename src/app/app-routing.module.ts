import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmdComponent } from './modules/cmd/cmd.component';
import { CmdGameComponent } from './modules/cmd/routes/cmd-game/cmd-game.component';
import { GameListComponent } from './modules/game-list/game-list.component';
import { EmulatorjsComponent } from './modules/game/components/emulatorjs/emulatorjs.component';
import { GameComponent } from './modules/game/game.component';
import { HomeComponent } from './modules/home/home.component';
import { PlatformComponent } from './modules/platform/platform.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cmd',
    component: CmdComponent,
    children: [
      { path: 'game', component: CmdGameComponent },
      {
        path: '',
        redirectTo: 'game',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'game/:id',
    component: GameComponent,
  },
  {
    path: 'platform/:platform',
    component: PlatformComponent,
  },
  {
    path: 'game-list',
    component: GameListComponent,
  },
  {
    path: 'emulatorjs',
    component: EmulatorjsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
