import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R115Component } from './r115.component';

describe('R115Component', () => {
  let component: R115Component;
  let fixture: ComponentFixture<R115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
