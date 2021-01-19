import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R206Component } from './r206.component';

describe('R206Component', () => {
  let component: R206Component;
  let fixture: ComponentFixture<R206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R206Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
