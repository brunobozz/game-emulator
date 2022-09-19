import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/content/games';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent implements OnInit {
  public term: string = '';
  public gamesList = games;

  ngOnInit(): void {
    this.sortListAsc(this.gamesList);
  }

  public sortListAsc(list: any) {
    list.sort((a: any, b: any) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
  }

  public sortListPlatform(list: any) {
    list.sort((a: any, b: any) =>
      a.platform > b.platform ? 1 : b.platform > a.platform ? -1 : 0
    );
  }

  public filter(event: any) {
    switch (event) {
      case 'game': {
        this.sortListAsc(this.gamesList);
        break;
      }
      case 'platform': {
        this.sortListPlatform(this.gamesList);
        break;
      }
      default: {
        this.sortListAsc(this.gamesList);
        break;
      }
    }
  }

  public searchTerm(event: any) {
    this.term = event;
  }
}
