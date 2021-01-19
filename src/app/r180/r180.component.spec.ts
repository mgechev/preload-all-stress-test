import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R180Component } from './r180.component';

describe('R180Component', () => {
  let component: R180Component;
  let fixture: ComponentFixture<R180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
