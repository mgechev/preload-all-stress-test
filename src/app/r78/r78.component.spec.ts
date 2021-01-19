import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R78Component } from './r78.component';

describe('R78Component', () => {
  let component: R78Component;
  let fixture: ComponentFixture<R78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
