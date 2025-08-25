import { NgModule, provideBrowserGlobalErrorListeners, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers, metaReducers } from "./store/reducers";
import { UserEffects } from "./store/effects/user.effects";
import { SystemEffects } from "./store/effects/system.effects";
import { ConfigEffects } from "./store/effects/config.effects";

import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";
import { Navbar } from './components/navbar/navbar';
import { LanguageDropdown } from './components/language-dropdown/language-dropdown';
import { Footer } from './components/footer/footer';
import { AvatarDropdown } from './components/avatar-dropdown/avatar-dropdown';
import { CodeEditor } from './components/code-editor/code-editor';
import { HighSearch } from './components/high-search/high-search';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    App,
    Navbar,
    LanguageDropdown,
    Footer,
    AvatarDropdown,
    CodeEditor,
    HighSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects, SystemEffects, ConfigEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
