import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R25Component } from './r25.component';

describe('R25Component', () => {
  let component: R25Component;
  let fixture: ComponentFixture<R25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
