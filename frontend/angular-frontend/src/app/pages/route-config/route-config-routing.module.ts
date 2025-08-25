import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouteConfigComponent } from "./route-config";

const routes: Routes = [
  {
    path: "",
    component: RouteConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteConfigRoutingModule { }
