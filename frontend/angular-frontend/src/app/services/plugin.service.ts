import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WasmPluginData } from "../interfaces/wasm-plugin";

@Injectable({
  providedIn: "root"
})
export class PluginService {

  constructor(private http: HttpClient) { }

  getWasmPlugins(): Observable<WasmPluginData[]> {
    return this.http.get<WasmPluginData[]>("/api/plugins");
  }

  createWasmPlugin(plugin: WasmPluginData): Observable<WasmPluginData> {
    return this.http.post<WasmPluginData>("/api/plugins", plugin);
  }

  updateWasmPlugin(name: string, plugin: WasmPluginData): Observable<WasmPluginData> {
    return this.http.put<WasmPluginData>(`/api/plugins/${name}`, plugin);
  }

  deleteWasmPlugin(name: string): Observable<any> {
    return this.http.delete(`/api/plugins/${name}`);
  }

  getGatewayRouteDetail(name: string): Observable<any> {
    return this.http.get(`/api/routes/${name}`);
  }

  getDomainPluginInstances(name: string): Observable<any> {
    return this.http.get(`/api/domains/${name}/plugins`);
  }
}
