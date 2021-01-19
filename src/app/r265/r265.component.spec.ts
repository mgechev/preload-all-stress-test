import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R265Component } from './r265.component';

describe('R265Component', () => {
  let component: R265Component;
  let fixture: ComponentFixture<R265Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R265Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
