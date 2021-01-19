import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R104Component } from './r104.component';

describe('R104Component', () => {
  let component: R104Component;
  let fixture: ComponentFixture<R104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
