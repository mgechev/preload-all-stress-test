import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R376Component } from './r376.component';

describe('R376Component', () => {
  let component: R376Component;
  let fixture: ComponentFixture<R376Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R376Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
