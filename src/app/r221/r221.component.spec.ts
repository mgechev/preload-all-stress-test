import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R221Component } from './r221.component';

describe('R221Component', () => {
  let component: R221Component;
  let fixture: ComponentFixture<R221Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R221Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
