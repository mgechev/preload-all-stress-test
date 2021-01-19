import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R85Component } from './r85.component';

describe('R85Component', () => {
  let component: R85Component;
  let fixture: ComponentFixture<R85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
