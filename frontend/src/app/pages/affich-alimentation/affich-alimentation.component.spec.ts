import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichAlimentationComponent } from './affich-alimentation.component';

describe('AffichAlimentationComponent', () => {
  let component: AffichAlimentationComponent;
  let fixture: ComponentFixture<AffichAlimentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichAlimentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichAlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
