import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root"
})
export class LanguageService {

  constructor(private translate: TranslateService) { }

  init() {
    this.translate.addLangs(["en-US", "zh-CN", "tr-TR"]);
    this.translate.setDefaultLang("en-US");

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en-US|zh-CN|tr-TR/) ? browserLang : "en-US");
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}
