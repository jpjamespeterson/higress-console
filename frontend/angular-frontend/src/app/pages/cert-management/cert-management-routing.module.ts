import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CertManagementComponent } from "./cert-management";

const routes: Routes = [
  {
    path: "",
    component: CertManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertManagementRoutingModule { }
