import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichMontantAlimenteComponent } from './affich-montant-alimente.component';

describe('AffichMontantAlimenteComponent', () => {
  let component: AffichMontantAlimenteComponent;
  let fixture: ComponentFixture<AffichMontantAlimenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichMontantAlimenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichMontantAlimenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
