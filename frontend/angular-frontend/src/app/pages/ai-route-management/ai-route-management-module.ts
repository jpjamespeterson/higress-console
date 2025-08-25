import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AiRouteManagementRoutingModule } from "./ai-route-management-routing-module";
import { AiRouteManagementComponent } from "./ai-route-management";

@NgModule({
  declarations: [AiRouteManagementComponent],
  imports: [
    CommonModule,
    AiRouteManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class AiRouteManagementModule { }
