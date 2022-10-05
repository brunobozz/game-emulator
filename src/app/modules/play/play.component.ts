import {
  Component,
  Renderer2,
  OnInit,
  AfterViewInit,
  Inject,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { emulators } from 'src/app/content/emulators';
import { ActivatedRoute } from '@angular/router';
import { games } from 'src/app/content/games';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
})
export class PlayComponent implements OnInit, AfterViewInit {
  private emulators = emulators;
  private gameList = games;
  private game: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _renderer2: Renderer2,
    private elRef: ElementRef,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  public async ngOnInit() {
    await this.loadGame();
    await this.configEmulator();
  }

  ngAfterViewInit(): void {
    let div = this.elRef.nativeElement.querySelector('a');
    console.log(div);
  }

  private async loadGame() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.findGame(params['id']);
      }
    });
  }

  private findGame(id: string) {
    this.game = this.gameList.find((x: any) => x.id === id);
  }

  private async configEmulator() {
    let variables = this._renderer2.createElement('script');
    variables.type = 'text/javascript';
    variables.text =
      this.findConfig(this.game.platform) +
      "EJS_gameUrl = 'https://ge-server.vercel.app/roms/" +
      this.game.platform +
      '/' +
      this.game.rom +
      "';";

    this._renderer2.appendChild(this._document.body, variables);

    let emulatorLoader = this._renderer2.createElement('script');
    emulatorLoader.src = 'https://www.emulatorjs.com/loader.js';
    this._renderer2.appendChild(this._document.body, emulatorLoader);
  }

  private findConfig(platform: string) {
    let emulator = this.emulators.find((x) => x.name == platform);
    return emulator?.config;
  }
}
