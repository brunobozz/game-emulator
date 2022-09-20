import { Component } from '@angular/core';
import { ServThemeService } from './services/serv-theme/serv-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'game-emulator';

  constructor(private themeService: ServThemeService) {}

  onActivate() {
    window.scrollTo(0, 0);
  }
}
