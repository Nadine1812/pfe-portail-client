import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationsClientComponent } from './reclamations-client.component';

describe('ReclamationsClientComponent', () => {
  let component: ReclamationsClientComponent;
  let fixture: ComponentFixture<ReclamationsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
