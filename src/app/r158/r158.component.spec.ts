import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R158Component } from './r158.component';

describe('R158Component', () => {
  let component: R158Component;
  let fixture: ComponentFixture<R158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R158Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
