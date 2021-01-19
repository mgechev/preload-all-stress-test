import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R63Component } from './r63.component';

describe('R63Component', () => {
  let component: R63Component;
  let fixture: ComponentFixture<R63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
