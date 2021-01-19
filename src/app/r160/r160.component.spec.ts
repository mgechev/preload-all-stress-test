import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R160Component } from './r160.component';

describe('R160Component', () => {
  let component: R160Component;
  let fixture: ComponentFixture<R160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
