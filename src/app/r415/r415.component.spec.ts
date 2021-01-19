import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R415Component } from './r415.component';

describe('R415Component', () => {
  let component: R415Component;
  let fixture: ComponentFixture<R415Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R415Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
