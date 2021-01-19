import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R381Component } from './r381.component';

describe('R381Component', () => {
  let component: R381Component;
  let fixture: ComponentFixture<R381Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R381Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
