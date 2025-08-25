import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertManagement } from './cert-management';

describe('CertManagement', () => {
  let component: CertManagement;
  let fixture: ComponentFixture<CertManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
