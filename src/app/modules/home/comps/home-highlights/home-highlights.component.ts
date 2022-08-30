import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-highlights',
  templateUrl: './home-highlights.component.html',
  styleUrls: ['./home-highlights.component.scss'],
})
export class HomeHighlightsComponent implements OnInit {
  public highlights: any = [
    {
      title: 'Super Mario Kart',
      description:
        '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem, accusantium est ullam quod harum earum quam, perspiciatis sint sequi voluptatum placeat possimus consequatur reiciendis explicabo, in dolores alias nihil!',
      image:
        'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/super_nintendo_5/H2x1_SNES_SuperMarioKart_image1280w.jpg',
    },
    {
      title: 'Turtles',
      description:
        '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem, accusantium est ullam quod harum earum quam, perspiciatis sint sequi voluptatum placeat possimus consequatur reiciendis explicabo, in dolores alias nihil!',
      image:
        'https://criticalhits.com.br/wp-content/uploads/2021/04/412887-910x542.jpg',
    },
    {
      title: 'Zelda',
      description:
        '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem, accusantium est ullam quod harum earum quam, perspiciatis sint sequi voluptatum placeat possimus consequatur reiciendis explicabo, in dolores alias nihil!',
      image:
        'https://static.wixstatic.com/media/846c59_eb0cb166b9fc4bd7a6723d3fe9a83a30~mv2.jpg/v1/fill/w_880,h_445,al_c,q_90/846c59_eb0cb166b9fc4bd7a6723d3fe9a83a30~mv2.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
