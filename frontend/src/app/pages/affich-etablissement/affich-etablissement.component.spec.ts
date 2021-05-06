import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichEtablissementComponent } from './affich-etablissement.component';

describe('AffichEtablissementComponent', () => {
  let component: AffichEtablissementComponent;
  let fixture: ComponentFixture<AffichEtablissementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
