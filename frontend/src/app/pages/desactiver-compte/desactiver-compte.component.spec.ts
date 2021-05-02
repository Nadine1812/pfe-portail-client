import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactiverCompteComponent } from './desactiver-compte.component';

describe('DesactiverCompteComponent', () => {
  let component: DesactiverCompteComponent;
  let fixture: ComponentFixture<DesactiverCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesactiverCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesactiverCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
