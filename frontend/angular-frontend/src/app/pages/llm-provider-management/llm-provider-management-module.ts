import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LlmProviderManagementRoutingModule } from "./llm-provider-management-routing-module";
import { LlmProviderManagementComponent } from "./llm-provider-management";

@NgModule({
  declarations: [LlmProviderManagementComponent],
  imports: [
    CommonModule,
    LlmProviderManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class LlmProviderManagementModule { }
