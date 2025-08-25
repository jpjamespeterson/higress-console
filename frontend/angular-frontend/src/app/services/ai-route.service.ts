import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AiRoute } from "../interfaces/ai-route";

@Injectable({
  providedIn: "root"
})
export class AiRouteService {

  constructor(private http: HttpClient) { }

  getAiRoutes(): Observable<AiRoute[]> {
    return this.http.get<AiRoute[]>("/api/ai-routes");
  }

  addAiRoute(aiRoute: AiRoute): Observable<AiRoute> {
    return this.http.post<AiRoute>("/api/ai-routes", aiRoute);
  }

  updateAiRoute(aiRoute: AiRoute): Observable<AiRoute> {
    return this.http.put<AiRoute>(`/api/ai-routes/${aiRoute.name}`, aiRoute);
  }

  deleteAiRoute(name: string): Observable<any> {
    return this.http.delete(`/api/ai-routes/${name}`);
  }
}
