import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceSourceComponent } from "./service-source";

const routes: Routes = [
  {
    path: "",
    component: ServiceSourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceSourceRoutingModule { }
