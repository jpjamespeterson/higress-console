import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { DomainManagementRoutingModule } from "./domain-management-routing-module";
import { DomainManagementComponent } from "./domain-management";

@NgModule({
  declarations: [DomainManagementComponent],
  imports: [
    CommonModule,
    DomainManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class DomainManagementModule { }
