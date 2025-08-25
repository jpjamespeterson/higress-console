import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { McpManagementComponent } from "./mcp-management";

const routes: Routes = [
  {
    path: "",
    component: McpManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class McpManagementRoutingModule { }
