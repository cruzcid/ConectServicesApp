import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferServicesPage } from './offer-services.page';

describe('OfferServicesPage', () => {
  let component: OfferServicesPage;
  let fixture: ComponentFixture<OfferServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferServicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
