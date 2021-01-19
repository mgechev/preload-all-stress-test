import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R475Component } from './r475.component';

describe('R475Component', () => {
  let component: R475Component;
  let fixture: ComponentFixture<R475Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R475Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
