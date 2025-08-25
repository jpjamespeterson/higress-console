import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LlmProvider } from "../interfaces/llm-provider";

@Injectable({
  providedIn: "root"
})
export class LlmProviderService {

  constructor(private http: HttpClient) { }

  getLlmProviders(): Observable<LlmProvider[]> {
    return this.http.get<LlmProvider[]>("/api/llm-providers");
  }

  addLlmProvider(llmProvider: LlmProvider): Observable<LlmProvider> {
    return this.http.post<LlmProvider>("/api/llm-providers", llmProvider);
  }

  updateLlmProvider(llmProvider: LlmProvider): Observable<LlmProvider> {
    return this.http.put<LlmProvider>(`/api/llm-providers/${llmProvider.name}`, llmProvider);
  }

  deleteLlmProvider(name: string): Observable<any> {
    return this.http.delete(`/api/llm-providers/${name}`);
  }
}
