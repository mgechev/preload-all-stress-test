import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R303Component } from './r303.component';

describe('R303Component', () => {
  let component: R303Component;
  let fixture: ComponentFixture<R303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R303Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
