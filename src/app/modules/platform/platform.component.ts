import { Component } from '@angular/core';
import { games } from 'src/app/content/games';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
})
export class PlatformComponent {
  public gamesList: any = games;
  public term: string = '';

  public searchTerm(event: any) {
    this.term = event;
  }
}
