import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R365Component } from './r365.component';

describe('R365Component', () => {
  let component: R365Component;
  let fixture: ComponentFixture<R365Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R365Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
