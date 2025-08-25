import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainManagement } from './domain-management';

describe('DomainManagement', () => {
  let component: DomainManagement;
  let fixture: ComponentFixture<DomainManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomainManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
