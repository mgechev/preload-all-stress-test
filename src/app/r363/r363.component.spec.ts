import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R363Component } from './r363.component';

describe('R363Component', () => {
  let component: R363Component;
  let fixture: ComponentFixture<R363Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R363Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
