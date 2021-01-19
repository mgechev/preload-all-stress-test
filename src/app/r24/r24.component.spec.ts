import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R24Component } from './r24.component';

describe('R24Component', () => {
  let component: R24Component;
  let fixture: ComponentFixture<R24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
