import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquantityComponent } from './viewquantity.component';

describe('ViewquantityComponent', () => {
  let component: ViewquantityComponent;
  let fixture: ComponentFixture<ViewquantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewquantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
