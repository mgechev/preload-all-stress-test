import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R289Component } from './r289.component';

describe('R289Component', () => {
  let component: R289Component;
  let fixture: ComponentFixture<R289Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R289Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
