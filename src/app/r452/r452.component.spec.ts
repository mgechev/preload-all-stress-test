import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R452Component } from './r452.component';

describe('R452Component', () => {
  let component: R452Component;
  let fixture: ComponentFixture<R452Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R452Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
