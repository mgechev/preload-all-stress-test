import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R332Component } from './r332.component';

describe('R332Component', () => {
  let component: R332Component;
  let fixture: ComponentFixture<R332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R332Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
