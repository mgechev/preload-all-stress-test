import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R355Component } from './r355.component';

describe('R355Component', () => {
  let component: R355Component;
  let fixture: ComponentFixture<R355Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R355Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
