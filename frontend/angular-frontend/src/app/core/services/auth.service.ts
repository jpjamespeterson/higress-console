import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducers";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private store: Store<AppState>) { }

  isAuthenticated(): Observable<boolean> {
    return this.store.select(state => !!state.user.currentUser);
  }

  hasRole(role: "admin" | "user" | "guest"): Observable<boolean> {
    return this.store.select(state => state.user.currentUser?.type === role);
  }
}
