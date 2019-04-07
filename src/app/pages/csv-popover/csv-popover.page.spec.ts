import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvPopoverPage } from './csv-popover.page';

describe('CsvPopoverPage', () => {
  let component: CsvPopoverPage;
  let fixture: ComponentFixture<CsvPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
