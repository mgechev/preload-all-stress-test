import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R262Component } from './r262.component';

describe('R262Component', () => {
  let component: R262Component;
  let fixture: ComponentFixture<R262Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R262Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
