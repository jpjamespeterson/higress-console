import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserInfo } from "../store/models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private http: HttpClient) { }

  fetchUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>("/api/user/info");
  }
}
