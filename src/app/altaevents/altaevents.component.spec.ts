import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaeventsComponent } from './altaevents.component';

describe('AltaeventsComponent', () => {
  let component: AltaeventsComponent;
  let fixture: ComponentFixture<AltaeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
