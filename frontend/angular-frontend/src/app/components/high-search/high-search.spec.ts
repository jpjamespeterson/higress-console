import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSearch } from './high-search';

describe('HighSearch', () => {
  let component: HighSearch;
  let fixture: ComponentFixture<HighSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
