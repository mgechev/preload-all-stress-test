import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R447Component } from './r447.component';

describe('R447Component', () => {
  let component: R447Component;
  let fixture: ComponentFixture<R447Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R447Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
