import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R97Component } from './r97.component';

describe('R97Component', () => {
  let component: R97Component;
  let fixture: ComponentFixture<R97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R97Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
