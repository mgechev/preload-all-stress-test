import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R372Component } from './r372.component';

describe('R372Component', () => {
  let component: R372Component;
  let fixture: ComponentFixture<R372Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R372Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
