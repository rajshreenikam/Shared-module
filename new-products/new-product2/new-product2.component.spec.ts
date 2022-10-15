import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProduct2Component } from './new-product2.component';

describe('NewProduct2Component', () => {
  let component: NewProduct2Component;
  let fixture: ComponentFixture<NewProduct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProduct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
