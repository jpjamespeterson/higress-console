import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouteConfigRoutingModule } from "./route-config-routing-module";
import { RouteConfigComponent } from "./route-config";

@NgModule({
  declarations: [RouteConfigComponent],
  imports: [
    CommonModule,
    RouteConfigRoutingModule,
    ReactiveFormsModule
  ]
})
export class RouteConfigModule { }
