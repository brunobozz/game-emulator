import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatorjsComponent } from './emulatorjs.component';

describe('EmulatorjsComponent', () => {
  let component: EmulatorjsComponent;
  let fixture: ComponentFixture<EmulatorjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmulatorjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmulatorjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
