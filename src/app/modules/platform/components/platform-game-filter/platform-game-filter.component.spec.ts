import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformGameFilterComponent } from './platform-game-filter.component';

describe('PlatformGameFilterComponent', () => {
  let component: PlatformGameFilterComponent;
  let fixture: ComponentFixture<PlatformGameFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformGameFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformGameFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
