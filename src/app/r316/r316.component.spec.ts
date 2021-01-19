import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R316Component } from './r316.component';

describe('R316Component', () => {
  let component: R316Component;
  let fixture: ComponentFixture<R316Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R316Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
