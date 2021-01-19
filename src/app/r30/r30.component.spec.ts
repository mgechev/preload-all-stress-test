import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R30Component } from './r30.component';

describe('R30Component', () => {
  let component: R30Component;
  let fixture: ComponentFixture<R30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
