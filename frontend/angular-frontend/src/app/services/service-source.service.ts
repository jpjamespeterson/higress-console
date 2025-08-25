import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ServiceSource } from "../interfaces/service-source";

@Injectable({
  providedIn: "root"
})
export class ServiceSourceService {

  constructor(private http: HttpClient) { }

  getServiceSources(): Observable<ServiceSource[]> {
    return this.http.get<ServiceSource[]>("/api/service-sources");
  }

  addServiceSource(serviceSource: ServiceSource): Observable<ServiceSource> {
    return this.http.post<ServiceSource>("/api/service-sources", serviceSource);
  }

  updateServiceSource(serviceSource: ServiceSource): Observable<ServiceSource> {
    return this.http.put<ServiceSource>(`/api/service-sources/${serviceSource.name}`, serviceSource);
  }

  deleteServiceSource(name: string): Observable<any> {
    return this.http.delete(`/api/service-sources/${name}`);
  }
}
