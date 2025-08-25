import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AiDashboardComponent } from "./ai-dashboard";

const routes: Routes = [
  {
    path: "",
    component: AiDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiDashboardRoutingModule { }
