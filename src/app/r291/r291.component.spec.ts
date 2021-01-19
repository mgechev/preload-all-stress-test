import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R291Component } from './r291.component';

describe('R291Component', () => {
  let component: R291Component;
  let fixture: ComponentFixture<R291Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R291Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
