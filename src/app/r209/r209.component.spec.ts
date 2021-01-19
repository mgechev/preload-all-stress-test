import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R209Component } from './r209.component';

describe('R209Component', () => {
  let component: R209Component;
  let fixture: ComponentFixture<R209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R209Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
