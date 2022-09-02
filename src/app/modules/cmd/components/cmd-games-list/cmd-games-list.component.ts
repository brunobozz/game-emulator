import { Component, OnInit } from '@angular/core';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';

@Component({
  selector: 'app-cmd-games-list',
  templateUrl: './cmd-games-list.component.html',
  styleUrls: ['./cmd-games-list.component.scss'],
})
export class CmdGamesListComponent implements OnInit {
  public gamesList: any;
  constructor(private apiService: ServMovkApiService) {}

  ngOnInit(): void {
    this.getGames();
  }

  private getGames() {
    this.apiService.getData('/games').subscribe((res: any) => {
      console.log(res);
      this.gamesList = res;
      this.orderGames();
    });
  }

  private orderGames() {
    this.gamesList = this.gamesList.sort((a: any, b: any) =>
      a.title < b.title ? -1 : 1
    );
  }
}
