import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R208Component } from './r208.component';

describe('R208Component', () => {
  let component: R208Component;
  let fixture: ComponentFixture<R208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R208Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
