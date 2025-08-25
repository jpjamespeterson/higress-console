import { Component } from "@angular/core";
import { LanguageService } from "../../core/services/language.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-language-dropdown",
  templateUrl: "./language-dropdown.html",
  styleUrls: ["./language-dropdown.scss"]
})
export class LanguageDropdownComponent {
  languages = [
    { code: "en-US", name: "English" },
    { code: "zh-CN", name: "简体中文" },
    { code: "tr-TR", name: "Türkçe" }
  ];
  currentLanguage: string;

  constructor(
    private languageService: LanguageService,
    private translate: TranslateService
  ) {
    this.currentLanguage = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }
}
