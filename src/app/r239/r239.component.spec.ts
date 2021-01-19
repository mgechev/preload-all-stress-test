import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R239Component } from './r239.component';

describe('R239Component', () => {
  let component: R239Component;
  let fixture: ComponentFixture<R239Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R239Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
