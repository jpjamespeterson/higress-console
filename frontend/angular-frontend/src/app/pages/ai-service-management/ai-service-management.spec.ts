import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiServiceManagement } from './ai-service-management';

describe('AiServiceManagement', () => {
  let component: AiServiceManagement;
  let fixture: ComponentFixture<AiServiceManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiServiceManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiServiceManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
