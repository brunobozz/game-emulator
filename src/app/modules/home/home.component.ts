import { Component } from '@angular/core';
import { games } from 'src/app/content/games';
import { ServThemeService } from 'src/app/services/serv-theme/serv-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public gamesList: any = games;

  public platforms: any = [
    'arcade',
    'psx',
    'n64',
    'snes',
    'master',
    'genesis',
    'gba',
    'nes',
  ];
}
