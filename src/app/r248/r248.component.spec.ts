import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R248Component } from './r248.component';

describe('R248Component', () => {
  let component: R248Component;
  let fixture: ComponentFixture<R248Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R248Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
