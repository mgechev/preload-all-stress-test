import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R402Component } from './r402.component';

describe('R402Component', () => {
  let component: R402Component;
  let fixture: ComponentFixture<R402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R402Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
