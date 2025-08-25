import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store/reducers";
import { Observable } from "rxjs";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.html",
  styleUrls: ["./footer.scss"]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  version$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.version$ = this.store.select(state => state.system.systemInfo?.version);
  }
}
