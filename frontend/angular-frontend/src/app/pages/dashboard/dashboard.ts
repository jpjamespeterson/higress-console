import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { DashboardService } from "src/app/services/dashboard.service";
import { DashboardInfo } from "src/app/interfaces/dashboard";
import { Mode } from "src/app/interfaces/config";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.html",
  styleUrls: ["./dashboard.scss"]
})
export class DashboardComponent implements OnInit {
  dashboardInfo$: Observable<DashboardInfo>;
  reconfiguring = false;
  dataSourceUidSampleVisible = false;
  mode$: Observable<string>;
  form: FormGroup;
  frameUrl: SafeResourceUrl;

  constructor(
    private dashboardService: DashboardService,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    this.form = this.fb.group({
      url: ["", Validators.required],
      dataSourceUid: ["", Validators.required],
      type: ["MAIN", Validators.required]
    });
  }

  ngOnInit(): void {
    this.dashboardInfo$ = this.dashboardService.getDashboardInfo();
    this.mode$ = this.store.select(state => state.config.properties?.mode || Mode.K8S);

    this.dashboardInfo$.subscribe(info => {
      if (info?.url) {
        this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(info.builtIn ? location.origin + info.url : info.url);
        this.form.get("url").setValue(info.url);
      }
    });
  }

  initDashboard() {
    this.dashboardService.initDashboard().subscribe(() => location.reload());
  }

  setDashboardUrl() {
    if (this.form.get("url").valid) {
      this.dashboardService.setDashboardUrl(this.form.get("url").value).subscribe(() => location.reload());
    }
  }

  downloadConfigFile() {
    if (this.form.get("dataSourceUid").valid && this.form.get("type").valid) {
      this.dashboardService.getDashboardConfigData(this.form.get("dataSourceUid").value, this.form.get("type").value).subscribe(data => {
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "higress-dashboard.json";
        link.href = url;
        link.onclick = () => setTimeout(() => URL.revokeObjectURL(url), 1500);
        link.click();
        link.remove();
      });
    }
  }
}
