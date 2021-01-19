import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R92Component } from './r92.component';

describe('R92Component', () => {
  let component: R92Component;
  let fixture: ComponentFixture<R92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R92Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
