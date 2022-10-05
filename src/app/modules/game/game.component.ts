import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { games } from 'src/app/content/games';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public gamesList: any = games;
  public game: any;
  public state = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadGame();
  }

  private loadGame() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.findGame(params['id']);
      }
    });
  }

  private findGame(id: string) {
    this.game = this.gamesList.find((x: any) => x.id === id);
  }

  public playGame() {
    this.state = true;
  }
}
