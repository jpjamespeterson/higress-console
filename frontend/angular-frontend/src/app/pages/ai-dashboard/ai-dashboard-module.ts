import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiDashboardRoutingModule } from './ai-dashboard-routing-module';
import { AiDashboard } from './ai-dashboard';


@NgModule({
  declarations: [
    AiDashboard
  ],
  imports: [
    CommonModule,
    AiDashboardRoutingModule
  ]
})
export class AiDashboardModule { }
