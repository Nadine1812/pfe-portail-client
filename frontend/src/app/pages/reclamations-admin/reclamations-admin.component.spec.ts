import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationsAdminComponent } from './reclamations-admin.component';

describe('ReclamationsAdminComponent', () => {
  let component: ReclamationsAdminComponent;
  let fixture: ComponentFixture<ReclamationsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
