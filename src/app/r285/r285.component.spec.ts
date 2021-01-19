import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R285Component } from './r285.component';

describe('R285Component', () => {
  let component: R285Component;
  let fixture: ComponentFixture<R285Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R285Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
