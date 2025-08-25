import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PluginManagementComponent } from "./plugin-management";

const routes: Routes = [
  {
    path: "",
    component: PluginManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginManagementRoutingModule { }
