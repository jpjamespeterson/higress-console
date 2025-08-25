import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Consumer } from "../interfaces/consumer";

@Injectable({
  providedIn: "root"
})
export class ConsumerService {

  constructor(private http: HttpClient) { }

  getConsumers(): Observable<Consumer[]> {
    return this.http.get<Consumer[]>("/api/consumers");
  }

  addConsumer(consumer: Consumer): Observable<Consumer> {
    return this.http.post<Consumer>("/api/consumers", consumer);
  }

  updateConsumer(consumer: Consumer): Observable<Consumer> {
    return this.http.put<Consumer>(`/api/consumers/${consumer.name}`, consumer);
  }

  deleteConsumer(name: string): Observable<any> {
    return this.http.delete(`/api/consumers/${name}`);
  }
}
