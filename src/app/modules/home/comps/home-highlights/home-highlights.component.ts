import { Component, OnInit } from '@angular/core';
import { highlights } from 'src/app/content/highlights';

@Component({
  selector: 'app-home-highlights',
  templateUrl: './home-highlights.component.html',
  styleUrls: ['./home-highlights.component.scss'],
})
export class HomeHighlightsComponent implements OnInit {
  public highlights = highlights;

  constructor() {}

  ngOnInit(): void {}
}
