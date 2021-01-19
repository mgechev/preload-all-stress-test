import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R245Component } from './r245.component';

describe('R245Component', () => {
  let component: R245Component;
  let fixture: ComponentFixture<R245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R245Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
