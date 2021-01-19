import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R333Component } from './r333.component';

describe('R333Component', () => {
  let component: R333Component;
  let fixture: ComponentFixture<R333Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R333Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
