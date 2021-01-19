import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R252Component } from './r252.component';

describe('R252Component', () => {
  let component: R252Component;
  let fixture: ComponentFixture<R252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R252Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
