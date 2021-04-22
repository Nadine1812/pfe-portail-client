import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiverClientComponent } from './activer-client.component';

describe('ActiverClientComponent', () => {
  let component: ActiverClientComponent;
  let fixture: ComponentFixture<ActiverClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiverClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiverClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
