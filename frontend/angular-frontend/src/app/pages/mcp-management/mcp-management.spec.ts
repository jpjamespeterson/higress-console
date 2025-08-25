import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McpManagement } from './mcp-management';

describe('McpManagement', () => {
  let component: McpManagement;
  let fixture: ComponentFixture<McpManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McpManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McpManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
