import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { SystemService } from "src/app/services/system.service";
import { Mode } from "src/app/interfaces/config";

@Component({
  selector: "app-system-settings",
  templateUrl: "./system-settings.html",
  styleUrls: ["./system-settings.scss"]
})
export class SystemSettingsComponent implements OnInit {
  form: FormGroup;
  configYaml$: Observable<string>;
  mode$: Observable<string>;

  constructor(
    private systemService: SystemService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      configYaml: [""]
    });
  }

  ngOnInit(): void {
    this.configYaml$ = this.systemService.getHigressConfig();
    this.mode$ = this.store.select(state => state.config.properties?.mode || Mode.K8S);
  }

  onSubmit() {
    if (this.form.valid) {
      this.systemService.updateHigressConfig(this.form.value.configYaml).subscribe(config => {
        this.form.get("configYaml").setValue(config);
      });
    }
  }
}
