import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SystemSettingsRoutingModule } from "./system-settings-routing-module";
import { SystemSettingsComponent } from "./system-settings";
import { CodeEditorComponent } from "src/app/components/code-editor.component";

@NgModule({
  declarations: [SystemSettingsComponent, CodeEditorComponent],
  imports: [
    CommonModule,
    SystemSettingsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SystemSettingsModule { }
