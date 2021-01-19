import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R288Component } from './r288.component';

describe('R288Component', () => {
  let component: R288Component;
  let fixture: ComponentFixture<R288Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R288Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
