import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R211Component } from './r211.component';

describe('R211Component', () => {
  let component: R211Component;
  let fixture: ComponentFixture<R211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R211Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
