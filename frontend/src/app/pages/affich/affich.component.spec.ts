import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichComponent } from './affich.component';

describe('AffichComponent', () => {
  let component: AffichComponent;
  let fixture: ComponentFixture<AffichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
