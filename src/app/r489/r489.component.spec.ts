import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R489Component } from './r489.component';

describe('R489Component', () => {
  let component: R489Component;
  let fixture: ComponentFixture<R489Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R489Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
