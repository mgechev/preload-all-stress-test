import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R148Component } from './r148.component';

describe('R148Component', () => {
  let component: R148Component;
  let fixture: ComponentFixture<R148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
