import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichPassagesComponent } from './affich-passages.component';

describe('AffichPassagesComponent', () => {
  let component: AffichPassagesComponent;
  let fixture: ComponentFixture<AffichPassagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichPassagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichPassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
