import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R455Component } from './r455.component';

describe('R455Component', () => {
  let component: R455Component;
  let fixture: ComponentFixture<R455Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R455Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
