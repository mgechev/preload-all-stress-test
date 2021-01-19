import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R121Component } from './r121.component';

describe('R121Component', () => {
  let component: R121Component;
  let fixture: ComponentFixture<R121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
