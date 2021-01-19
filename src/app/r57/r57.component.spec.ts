import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R57Component } from './r57.component';

describe('R57Component', () => {
  let component: R57Component;
  let fixture: ComponentFixture<R57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R57Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
