import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Domain } from "../interfaces/domain";

@Injectable({
  providedIn: "root"
})
export class DomainService {

  constructor(private http: HttpClient) { }

  getGatewayDomains(): Observable<Domain[]> {
    return this.http.get<Domain[]>("/api/domains");
  }

  addGatewayDomain(domain: Domain): Observable<Domain> {
    return this.http.post<Domain>("/api/domains", domain);
  }

  updateGatewayDomain(domain: Domain): Observable<Domain> {
    return this.http.put<Domain>(`/api/domains/${domain.name}`, domain);
  }

  deleteGatewayDomain(name: string): Observable<any> {
    return this.http.delete(`/api/domains/${name}`);
  }
}
