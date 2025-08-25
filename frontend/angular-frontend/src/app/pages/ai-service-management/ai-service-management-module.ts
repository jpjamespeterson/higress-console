import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AiServiceManagementRoutingModule } from "./ai-service-management-routing-module";
import { AiServiceManagementComponent } from "./ai-service-management";

@NgModule({
  declarations: [AiServiceManagementComponent],
  imports: [
    CommonModule,
    AiServiceManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class AiServiceManagementModule { }
