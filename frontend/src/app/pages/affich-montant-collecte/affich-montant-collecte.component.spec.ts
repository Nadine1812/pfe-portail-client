import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichMontantCollecteComponent } from './affich-montant-collecte.component';

describe('AffichMontantCollecteComponent', () => {
  let component: AffichMontantCollecteComponent;
  let fixture: ComponentFixture<AffichMontantCollecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichMontantCollecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichMontantCollecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
