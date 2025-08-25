import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteConfig } from './route-config';

describe('RouteConfig', () => {
  let component: RouteConfig;
  let fixture: ComponentFixture<RouteConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
