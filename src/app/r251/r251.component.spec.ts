import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R251Component } from './r251.component';

describe('R251Component', () => {
  let component: R251Component;
  let fixture: ComponentFixture<R251Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R251Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
