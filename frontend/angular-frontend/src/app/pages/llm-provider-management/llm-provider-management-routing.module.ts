import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LlmProviderManagementComponent } from "./llm-provider-management";

const routes: Routes = [
  {
    path: "",
    component: LlmProviderManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlmProviderManagementRoutingModule { }
