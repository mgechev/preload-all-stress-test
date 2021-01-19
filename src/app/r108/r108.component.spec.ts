import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R108Component } from './r108.component';

describe('R108Component', () => {
  let component: R108Component;
  let fixture: ComponentFixture<R108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
