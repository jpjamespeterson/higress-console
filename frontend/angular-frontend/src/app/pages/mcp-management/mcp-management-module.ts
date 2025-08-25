import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { McpManagementRoutingModule } from "./mcp-management-routing-module";
import { McpManagementComponent } from "./mcp-management";

@NgModule({
  declarations: [McpManagementComponent],
  imports: [
    CommonModule,
    McpManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class McpManagementModule { }
