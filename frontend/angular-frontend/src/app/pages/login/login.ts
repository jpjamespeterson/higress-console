import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { LOGIN_PROMPT, SYSTEM_INITIALIZED } from "src/app/interfaces/config";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginPrompt$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      autoLogin: [false]
    });
  }

  ngOnInit(): void {
    this.store.select(state => state.config.properties).subscribe(properties => {
      if (properties && !properties[SYSTEM_INITIALIZED]) {
        this.router.navigate(["/init"]);
      }
    });
    this.loginPrompt$ = this.store.select(state => state.config.properties?.[LOGIN_PROMPT]);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // I will implement the login logic in the auth service later
      // this.authService.login(this.loginForm.value).subscribe(() => {
      //   this.router.navigate(["/"]);
      // });
      this.router.navigate(["/"]);
    }
  }
}
