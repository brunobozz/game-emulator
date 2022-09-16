import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-platform-game-list',
  templateUrl: './platform-game-list.component.html',
  styleUrls: ['./platform-game-list.component.scss'],
})
export class PlatformGameListComponent implements OnInit {
  @Input() games: any;
  public platform: any;
  public platformGames: any = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.readPlatform();
  }

  private readPlatform() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['platform']) {
        this.platform = params['platform'];
        this.filterList(params['platform']);
      }
    });
  }

  private filterList(platform: string) {
    this.games.map((game: any) => {
      if (game.platform == platform) {
        this.platformGames.push(game);
      }
      this.sortList();
    });
  }

  private sortList() {
    this.platformGames.sort((a: any, b: any) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
  }

  public letsGame(id: string) {
    this.router.navigateByUrl('/game/' + id);
  }
}
