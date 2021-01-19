import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R235Component } from './r235.component';

describe('R235Component', () => {
  let component: R235Component;
  let fixture: ComponentFixture<R235Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R235Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
