import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { McpServer } from "../interfaces/mcp";

@Injectable({
  providedIn: "root"
})
export class McpService {

  constructor(private http: HttpClient) { }

  listMcpServers(params: { mcpServerName?: string; type?: string }): Observable<McpServer[]> {
    return this.http.get<McpServer[]>("/api/mcp-servers", { params });
  }

  createOrUpdateMcpServer(mcpServer: McpServer): Observable<McpServer> {
    return this.http.post<McpServer>("/api/mcp-servers", mcpServer);
  }

  deleteMcpServer(name: string): Observable<any> {
    return this.http.delete(`/api/mcp-servers/${name}`);
  }
}
