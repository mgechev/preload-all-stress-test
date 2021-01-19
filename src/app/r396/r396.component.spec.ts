import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R396Component } from './r396.component';

describe('R396Component', () => {
  let component: R396Component;
  let fixture: ComponentFixture<R396Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R396Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
