import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CertManagementRoutingModule } from "./cert-management-routing-module";
import { CertManagementComponent } from "./cert-management";

@NgModule({
  declarations: [CertManagementComponent],
  imports: [
    CommonModule,
    CertManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class CertManagementModule { }
