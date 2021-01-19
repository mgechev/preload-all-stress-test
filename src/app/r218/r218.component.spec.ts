import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R218Component } from './r218.component';

describe('R218Component', () => {
  let component: R218Component;
  let fixture: ComponentFixture<R218Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R218Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
