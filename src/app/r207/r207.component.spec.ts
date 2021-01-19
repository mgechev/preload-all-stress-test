import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R207Component } from './r207.component';

describe('R207Component', () => {
  let component: R207Component;
  let fixture: ComponentFixture<R207Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R207Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
