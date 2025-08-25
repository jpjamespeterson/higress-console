import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { LanguageService } from "./core/services/language.service";
import { TranslateService } from "@ngx-translate/core";
import * as UserActions from "./store/actions/user.actions";
import * as SystemActions from "./store/actions/system.actions";
import * as ConfigActions from "./store/actions/config.actions";
import { AppState } from "./store/reducers";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.scss"
})
export class App implements OnInit {
  title = "angular-frontend";

  constructor(
    private languageService: LanguageService,
    public translate: TranslateService,
    private store: Store<AppState>
  ) {
    this.languageService.init();
  }

  ngOnInit() {
    this.store.dispatch(UserActions.loadUserInfo());
    this.store.dispatch(SystemActions.loadSystemInfo());
    this.store.dispatch(ConfigActions.loadConfigs());
  }
}
