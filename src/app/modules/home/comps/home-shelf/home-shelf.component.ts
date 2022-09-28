import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-home-shelf',
  templateUrl: './home-shelf.component.html',
  styleUrls: ['./home-shelf.component.scss'],
})
export class HomeShelfComponent implements OnInit {
  @Input() items: any;
  @Input() platform?: string;
  @Input() title?: string;
  public addressSearch!: HTMLElement;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.shuffleArray(this.items);
  }

  public letsGame(id: string) {
    this.router.navigateByUrl('/game/' + id);
  }

  private shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  public scrollShelfLeft(element: HTMLElement) {
    element.scrollTo(element.scrollLeft - element.offsetWidth, 0);
  }
  public scrollShelfRight(element: HTMLElement) {
    element.scrollTo(element.scrollLeft + element.offsetWidth, 0);
  }
}
