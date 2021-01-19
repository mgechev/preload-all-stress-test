import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R436Component } from './r436.component';

describe('R436Component', () => {
  let component: R436Component;
  let fixture: ComponentFixture<R436Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R436Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
