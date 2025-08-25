import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiRouteManagement } from './ai-route-management';

describe('AiRouteManagement', () => {
  let component: AiRouteManagement;
  let fixture: ComponentFixture<AiRouteManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiRouteManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiRouteManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
