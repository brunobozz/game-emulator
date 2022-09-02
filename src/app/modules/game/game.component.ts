import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { games } from 'src/app/content/games';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public gamesList: any = games;
  public game: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ServMovkApiService
  ) {}

  ngOnInit(): void {
    this.loadGame();
  }

  private loadGame() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        // this.getGame(params['id']);
        this.findGame(params['id']);
      }
    });
  }

  private findGame(id: string) {
    this.game = this.gamesList.find((x: any) => x.id === id);
  }

  private getGame(id: string) {
    this.apiService.getData('/games/' + id).subscribe((res: any) => {
      this.game = res;
      console.log(this.game);
    });
  }
}
