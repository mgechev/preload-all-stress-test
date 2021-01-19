import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R254Component } from './r254.component';

describe('R254Component', () => {
  let component: R254Component;
  let fixture: ComponentFixture<R254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R254Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
