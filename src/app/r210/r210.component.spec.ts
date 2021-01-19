import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R210Component } from './r210.component';

describe('R210Component', () => {
  let component: R210Component;
  let fixture: ComponentFixture<R210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R210Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
