import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
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
        this.getGame(params['id']);
      }
    });
  }

  private getGame(id: string) {
    this.apiService.getData('/games/' + id).subscribe((res: any) => {
      this.game = res;
      console.log(this.game);
    });
  }
}
