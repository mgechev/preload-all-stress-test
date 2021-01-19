import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R448Component } from './r448.component';

describe('R448Component', () => {
  let component: R448Component;
  let fixture: ComponentFixture<R448Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R448Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
