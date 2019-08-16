import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeorderComponent } from './changeorder.component';

describe('ChangeorderComponent', () => {
  let component: ChangeorderComponent;
  let fixture: ComponentFixture<ChangeorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
