import { Component, OnInit } from '@angular/core';
import { ServThemeService } from 'src/app/services/serv-theme/serv-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private themeService: ServThemeService) {}

  ngOnInit(): void {}
}
