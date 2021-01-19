import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R26Component } from './r26.component';

describe('R26Component', () => {
  let component: R26Component;
  let fixture: ComponentFixture<R26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
