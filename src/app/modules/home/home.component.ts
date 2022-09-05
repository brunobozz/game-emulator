import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/content/games';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';
import { ServThemeService } from 'src/app/services/serv-theme/serv-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public gamesList: any = games;

  public snesList: any = [];
  public masterList: any = [];
  public psxList: any = [];
  public n64List: any = [];
  public arcadeList: any = [];
  public nesList: any = [];
  public genesisList: any = [];

  constructor(private apiService: ServMovkApiService) {}

  ngOnInit(): void {
    this.mapGames();
    // this.getGames();
  }

  private getGames() {
    this.apiService.getData('/games').subscribe((res: any) => {
      this.gamesList = res;
      this.mapGames();
    });
  }

  private mapGames() {
    this.gamesList.map((game: any) => {
      if (game.platform == 'psx') {
        this.psxList.push(game);
      }
      if (game.platform == 'snes') {
        this.snesList.push(game);
      }
      if (game.platform == 'n64') {
        this.n64List.push(game);
      }
      if (game.platform == 'master') {
        this.masterList.push(game);
      }
      if (game.platform == 'arcade') {
        this.arcadeList.push(game);
      }
      if (game.platform == 'nes') {
        this.nesList.push(game);
      }
      if (game.platform == 'genesis') {
        this.genesisList.push(game);
      }
    });
  }
}
