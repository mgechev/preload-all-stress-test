import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R474Component } from './r474.component';

describe('R474Component', () => {
  let component: R474Component;
  let fixture: ComponentFixture<R474Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R474Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
