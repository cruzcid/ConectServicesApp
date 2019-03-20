import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindServicesPage } from './find-services.page';

describe('FindServicesPage', () => {
  let component: FindServicesPage;
  let fixture: ComponentFixture<FindServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindServicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
