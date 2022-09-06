import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformNavbarComponent } from './platform-navbar.component';

describe('PlatformNavbarComponent', () => {
  let component: PlatformNavbarComponent;
  let fixture: ComponentFixture<PlatformNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
