import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R286Component } from './r286.component';

describe('R286Component', () => {
  let component: R286Component;
  let fixture: ComponentFixture<R286Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R286Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
