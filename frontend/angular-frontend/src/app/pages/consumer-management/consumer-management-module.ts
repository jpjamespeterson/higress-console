import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ConsumerManagementRoutingModule } from "./consumer-management-routing-module";
import { ConsumerManagementComponent } from "./consumer-management";

@NgModule({
  declarations: [ConsumerManagementComponent],
  imports: [
    CommonModule,
    ConsumerManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class ConsumerManagementModule { }
