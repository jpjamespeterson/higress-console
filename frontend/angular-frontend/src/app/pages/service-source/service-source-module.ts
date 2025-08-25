import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ServiceSourceRoutingModule } from "./service-source-routing-module";
import { ServiceSourceComponent } from "./service-source";

@NgModule({
  declarations: [ServiceSourceComponent],
  imports: [
    CommonModule,
    ServiceSourceRoutingModule,
    ReactiveFormsModule
  ]
})
export class ServiceSourceModule { }
