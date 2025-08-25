import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Route } from "../interfaces/route";

@Injectable({
  providedIn: "root"
})
export class RouteService {

  constructor(private http: HttpClient) { }

  getGatewayRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>("/api/routes");
  }

  addGatewayRoute(route: Route): Observable<Route> {
    return this.http.post<Route>("/api/routes", route);
  }

  updateGatewayRoute(route: Route): Observable<Route> {
    return this.http.put<Route>(`/api/routes/${route.name}`, route);
  }

  deleteGatewayRoute(name: string): Observable<any> {
    return this.http.delete(`/api/routes/${name}`);
  }
}
