import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R390Component } from './r390.component';

describe('R390Component', () => {
  let component: R390Component;
  let fixture: ComponentFixture<R390Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R390Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
