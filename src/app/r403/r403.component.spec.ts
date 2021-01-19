import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R403Component } from './r403.component';

describe('R403Component', () => {
  let component: R403Component;
  let fixture: ComponentFixture<R403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R403Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
