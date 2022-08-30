import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-shelf',
  templateUrl: './home-shelf.component.html',
  styleUrls: ['./home-shelf.component.scss'],
})
export class HomeShelfComponent implements OnInit {
  @Input() items: any;
  @Input() logo?: string;
  @Input() title?: string;
  @Input() size?: string;

  constructor() {}

  ngOnInit(): void {}
}
