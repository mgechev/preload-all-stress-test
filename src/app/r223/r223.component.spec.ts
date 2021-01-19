import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R223Component } from './r223.component';

describe('R223Component', () => {
  let component: R223Component;
  let fixture: ComponentFixture<R223Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R223Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
