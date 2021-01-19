import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R250Component } from './r250.component';

describe('R250Component', () => {
  let component: R250Component;
  let fixture: ComponentFixture<R250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R250Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
