import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R493Component } from './r493.component';

describe('R493Component', () => {
  let component: R493Component;
  let fixture: ComponentFixture<R493Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R493Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
