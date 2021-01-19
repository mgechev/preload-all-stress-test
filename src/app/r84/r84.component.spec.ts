import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R84Component } from './r84.component';

describe('R84Component', () => {
  let component: R84Component;
  let fixture: ComponentFixture<R84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R84Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
