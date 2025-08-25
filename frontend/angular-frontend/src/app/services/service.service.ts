import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Service } from "../interfaces/service";

@Injectable({
  providedIn: "root"
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getGatewayServices(): Observable<Service[]> {
    return this.http.get<Service[]>("/api/services");
  }
}
