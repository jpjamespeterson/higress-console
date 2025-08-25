import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlmProviderManagement } from './llm-provider-management';

describe('LlmProviderManagement', () => {
  let component: LlmProviderManagement;
  let fixture: ComponentFixture<LlmProviderManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LlmProviderManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlmProviderManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
