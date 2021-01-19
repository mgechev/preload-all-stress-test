import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R439Component } from './r439.component';

describe('R439Component', () => {
  let component: R439Component;
  let fixture: ComponentFixture<R439Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R439Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
