import { Component, OnInit } from '@angular/core';
import { ServThemeService } from 'src/app/services/serv-theme/serv-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public snes: any = [
    {
      title: 'Bomber Man',
      image:
        'https://galaxianerd.com/wp-content/uploads/2018/04/ps3pkg-super-bomberman-4-snes-destravado-cfw-D_NQ_NP_834737-MLB26444969803_112017-F-1.jpg',
    },
    {
      title: 'Street Fighter II',
      image: 'https://miro.medium.com/max/1198/0*shPBK_cdmPbeUx9T.',
    },
    {
      title: 'Zelda - A Link to the Past',
      image:
        'https://jogoveio.com.br/wp-content/uploads/2016/11/zelda-snes-cover-jogoveio-502x350.jpg',
    },
    {
      title: 'F-Zero',
      image:
        'https://i2.wp.com/rubberchickengames.com/wp-content/uploads/2017/04/snes-f-zero-cover-box-art-front-usa-super-nintendo-artwork.jpg?ssl=1',
    },
    {
      title: 'Teenage Mutant Ninja Turtles IV',
      image:
        'https://upload.wikimedia.org/wikipedia/en/4/4e/Turtles_in_Time_%28SNES_cover%29.jpg',
    },
    {
      title: 'Super Mario Kart',
      image: 'https://i.ebayimg.com/images/g/rQ0AAOSw6btXSlph/s-l400.jpg',
    },
    {
      title: 'International Superstar Soccer Deluxe',
      image:
        'https://wowroms-photos.com/emulators-roms-logo/48/27945/420-420/International+Superstar+Soccer+Deluxe+(USA)-image.jpg',
    },
    {
      title: 'Donkey Kong Country',
      image: 'https://pbs.twimg.com/media/Ec_0OH_XYAAvT4F.jpg:large',
    },
  ];

  public master: any = [
    {
      title: 'Fart Car',
      image:
        'http://www.digitiser2000.com/uploads/4/0/6/6/40667199/fcar_orig.png',
    },
    {
      title: 'Rocky',
      image:
        'https://www.mobygames.com/images/covers/l/119338-rocky-sega-master-system-front-cover.png',
    },
    {
      title: 'The Ninja',
      image:
        'https://www.mobygames.com/images/covers/l/56050-the-ninja-sega-master-system-front-cover.jpg',
    },
    {
      title: 'Pro Wrestling',
      image:
        'https://i.pinimg.com/550x/63/fc/23/63fc238f2102239aa2134f4f0134bbf8.jpg',
    },
    {
      title: 'Choplifter',
      image:
        'https://cdn3.spong.com/pack/c/h/choplifter187738l/_-Choplifter-Sega-Master-System-_.jpg',
    },
    {
      title: 'Action Fighter',
      image:
        'http://www.digitiser2000.com/uploads/4/0/6/6/40667199/published/action.png?1503904391',
    },
    {
      title: 'My Hero',
      image: 'http://www.retroplace.com/pics/sms/packshots/22244--my-hero.png',
    },
    {
      title: 'After Burner',
      image:
        'https://i.pinimg.com/originals/32/dc/0b/32dc0be7c91664ba57fc3a1c4d571a5a.jpg',
    },
    {
      title: 'Great Basketball',
      image:
        'http://www.digitiser2000.com/uploads/4/0/6/6/40667199/published/baske.jpg?1503904372',
    },
    {
      title: 'Enduro Racer',
      image: 'https://tm.ibxk.com.br/2018/04/30/30113319764550.jpg',
    },
  ];

  public play: any = [
    {
      title: 'Teken 3',
      image:
        'https://www.covercentury.com/covers/psx/t/Tekken-3-NTSC-PSX-FRONT.jpg',
    },
    {
      title: 'Spider-Man',
      image:
        'https://www.mobygames.com/images/covers/l/12193-spider-man-playstation-front-cover.jpg',
    },
    {
      title: 'Vigilante 8',
      image: 'https://pbs.twimg.com/media/FUIDRynXwAIJJsb.png',
    },
    {
      title: 'GTA',
      image:
        'https://static.emulatorgames.net/images/playstation/grand-theft-auto-ntsc-u-slus-00106.jpg',
    },
    {
      title: 'Fifa 97',
      image:
        'https://www.covercentury.com/covers/psx/f/FIFA-97-NTSC-PSX-FRONT.jpg',
    },
    {
      title: 'Driver',
      image:
        'https://i.pinimg.com/736x/38/ad/58/38ad584e2ca860f9e72e4874e1a9b4f7.jpg',
    },
    {
      title: 'Tomb Raider II',
      image: 'https://i.imgur.com/hSSRAVM.png',
    },
    {
      title: 'THPS2',
      image:
        'https://www.covercentury.com/covers/psx/t/Tony-Hawks-Pro-Skater-3-NTSC-PSX-FRONT.jpg',
    },
    {
      title: 'TNMT',
      image: 'https://pbs.twimg.com/media/FSe0GFrXIAA-CcK.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
