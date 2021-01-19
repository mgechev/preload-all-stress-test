import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R478Component } from './r478.component';

describe('R478Component', () => {
  let component: R478Component;
  let fixture: ComponentFixture<R478Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R478Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
