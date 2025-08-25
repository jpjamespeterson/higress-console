import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ServiceListRoutingModule } from "./service-list-routing-module";
import { ServiceListComponent } from "./service-list";

@NgModule({
  declarations: [ServiceListComponent],
  imports: [
    CommonModule,
    ServiceListRoutingModule,
    ReactiveFormsModule
  ]
})
export class ServiceListModule { }
