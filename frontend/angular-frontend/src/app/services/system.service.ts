import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SystemService {

  constructor(private http: HttpClient) { }

  getSystemInfo(): Observable<any> {
    return this.http.get<any>("/api/system/info");
  }

  getConfigs(): Observable<any> {
    return this.http.get<any>("/api/system/config");
  }
}
