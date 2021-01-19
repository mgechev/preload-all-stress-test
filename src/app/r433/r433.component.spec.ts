import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R433Component } from './r433.component';

describe('R433Component', () => {
  let component: R433Component;
  let fixture: ComponentFixture<R433Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R433Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
