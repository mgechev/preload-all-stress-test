import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R166Component } from './r166.component';

describe('R166Component', () => {
  let component: R166Component;
  let fixture: ComponentFixture<R166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
