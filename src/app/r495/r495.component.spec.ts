import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R495Component } from './r495.component';

describe('R495Component', () => {
  let component: R495Component;
  let fixture: ComponentFixture<R495Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R495Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
