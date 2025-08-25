import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/reducers";
import { Observable } from "rxjs";
import { UserInfo } from "../../store/models/user.model";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-avatar-dropdown",
  templateUrl: "./avatar-dropdown.html",
  styleUrls: ["./avatar-dropdown.scss"]
})
export class AvatarDropdownComponent {
  currentUser$: Observable<UserInfo | null>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private userService: UserService
  ) {
    this.currentUser$ = this.store.select(state => state.user.currentUser);
  }

  changePassword() {
    this.router.navigate(["/user/changePassword"]);
  }

  logout() {
    // I will implement the logout logic in the user service later
    // this.userService.logout().subscribe(() => {
    //   this.router.navigate(["/login"]);
    // });
    this.router.navigate(["/login"]);
  }
}
