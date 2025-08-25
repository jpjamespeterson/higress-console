import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerManagement } from './consumer-management';

describe('ConsumerManagement', () => {
  let component: ConsumerManagement;
  let fixture: ComponentFixture<ConsumerManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumerManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
