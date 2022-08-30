import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-shelf',
  templateUrl: './home-shelf.component.html',
  styleUrls: ['./home-shelf.component.scss'],
})
export class HomeShelfComponent implements OnInit {
  public items: any = [
    {
      title: 'Bomber Man',
      image: 'snes_bomberman_4.jpg',
    },
    {
      title: 'Street Fighter II',
      image: 'snes_street_fighter_2.jpg',
    },
    {
      title: 'Zelda - A Link to the Past',
      image: 'snes_zelda_a_link_to_the_past.jpg',
    },
    {
      title: 'F-Zero',
      image: 'snes_f_zero.jpg',
    },
    {
      title: 'Teenage Mutant Ninja Turtles IV',
      image: 'snes_tmnt_IV-in-time.jpg',
    },
    {
      title: 'Super Mario Kart',
      image: 'snes_mario_kart.jpg',
    },
    {
      title: 'International Superstar Soccer Deluxe',
      image: 'snes_international_superstar_soccer_deluxe.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
