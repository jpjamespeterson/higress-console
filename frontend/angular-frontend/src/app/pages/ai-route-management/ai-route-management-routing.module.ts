import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AiRouteManagementComponent } from "./ai-route-management";

const routes: Routes = [
  {
    path: "",
    component: AiRouteManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiRouteManagementRoutingModule { }
