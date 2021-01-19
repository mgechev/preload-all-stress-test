import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R308Component } from './r308.component';

describe('R308Component', () => {
  let component: R308Component;
  let fixture: ComponentFixture<R308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R308Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
