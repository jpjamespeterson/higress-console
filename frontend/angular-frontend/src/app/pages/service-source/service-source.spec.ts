import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSource } from './service-source';

describe('ServiceSource', () => {
  let component: ServiceSource;
  let fixture: ComponentFixture<ServiceSource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceSource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
