import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DashboardInfo } from "../interfaces/dashboard";

@Injectable({
  providedIn: "root"
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDashboardInfo(): Observable<DashboardInfo> {
    return this.http.get<DashboardInfo>("/api/dashboard/info");
  }

  setDashboardUrl(url: string): Observable<any> {
    return this.http.post("/api/dashboard/url", { url });
  }

  initDashboard(): Observable<any> {
    return this.http.post("/api/dashboard/init", {});
  }

  getDashboardConfigData(dataSourceUid: string, type: string): Observable<any> {
    return this.http.get(`/api/dashboard/config-data?dataSourceUid=${dataSourceUid}&type=${type}`);
  }
}
