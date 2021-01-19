import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R461Component } from './r461.component';

describe('R461Component', () => {
  let component: R461Component;
  let fixture: ComponentFixture<R461Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R461Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
