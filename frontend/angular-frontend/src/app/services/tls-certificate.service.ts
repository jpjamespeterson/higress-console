import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TlsCertificate } from "../interfaces/tls-certificate";

@Injectable({
  providedIn: "root"
})
export class TlsCertificateService {

  constructor(private http: HttpClient) { }

  getTlsCertificates(): Observable<TlsCertificate[]> {
    return this.http.get<TlsCertificate[]>("/api/tls-certificates");
  }

  addTlsCertificate(tlsCertificate: TlsCertificate): Observable<TlsCertificate> {
    return this.http.post<TlsCertificate>("/api/tls-certificates", tlsCertificate);
  }

  updateTlsCertificate(tlsCertificate: TlsCertificate): Observable<TlsCertificate> {
    return this.http.put<TlsCertificate>(`/api/tls-certificates/${tlsCertificate.name}`, tlsCertificate);
  }

  deleteTlsCertificate(name: string): Observable<any> {
    return this.http.delete(`/api/tls-certificates/${name}`);
  }
}
