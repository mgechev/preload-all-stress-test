import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R406Component } from './r406.component';

describe('R406Component', () => {
  let component: R406Component;
  let fixture: ComponentFixture<R406Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R406Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
