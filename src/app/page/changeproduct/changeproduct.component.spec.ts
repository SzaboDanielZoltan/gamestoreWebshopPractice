import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeproductComponent } from './changeproduct.component';

describe('ChangeproductComponent', () => {
  let component: ChangeproductComponent;
  let fixture: ComponentFixture<ChangeproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
