import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R394Component } from './r394.component';

describe('R394Component', () => {
  let component: R394Component;
  let fixture: ComponentFixture<R394Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R394Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
