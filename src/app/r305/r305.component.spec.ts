import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R305Component } from './r305.component';

describe('R305Component', () => {
  let component: R305Component;
  let fixture: ComponentFixture<R305Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R305Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
