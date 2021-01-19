import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R395Component } from './r395.component';

describe('R395Component', () => {
  let component: R395Component;
  let fixture: ComponentFixture<R395Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R395Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
