import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { DashboardService } from "src/app/services/dashboard.service";
import { DashboardInfo, DashboardType } from "src/app/interfaces/dashboard";

@Component({
  selector: "app-ai-dashboard",
  templateUrl: "./ai-dashboard.html",
  styleUrls: ["./ai-dashboard.scss"]
})
export class AiDashboardComponent implements OnInit {
  dashboardInfo$: Observable<DashboardInfo>;
  frameUrl: SafeResourceUrl;

  constructor(
    private dashboardService: DashboardService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.dashboardInfo$ = this.dashboardService.getDashboardInfo(DashboardType.AI);
    this.dashboardInfo$.subscribe(info => {
      if (info?.url) {
        this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(info.builtIn ? location.origin + info.url : info.url);
      }
    });
  }
}
