import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AiServiceManagementComponent } from "./ai-service-management";

const routes: Routes = [
  {
    path: "",
    component: AiServiceManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiServiceManagementRoutingModule { }
