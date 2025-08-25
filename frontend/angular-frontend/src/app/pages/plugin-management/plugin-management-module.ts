import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { PluginManagementRoutingModule } from "./plugin-management-routing-module";
import { PluginManagementComponent } from "./plugin-management";

@NgModule({
  declarations: [PluginManagementComponent],
  imports: [
    CommonModule,
    PluginManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class PluginManagementModule { }
