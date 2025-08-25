import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DomainManagementComponent } from "./domain-management";

const routes: Routes = [
  {
    path: "",
    component: DomainManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainManagementRoutingModule { }
