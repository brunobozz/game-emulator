import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/content/games';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
})
export class PlatformComponent implements OnInit {
  public gamesList: any = games;

  constructor() {}

  ngOnInit(): void {}
}
