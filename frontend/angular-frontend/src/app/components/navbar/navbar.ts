import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.html",
  styleUrls: ["./navbar.scss"]
})
export class NavbarComponent implements OnInit {
  linkList: any[];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.updateLinkList();
    });
    this.updateLinkList();
  }

  updateLinkList() {
    const lang = this.translate.currentLang;
    const officialSiteLang = lang === "zh-CN" ? "zh-cn" : "en-us";

    this.linkList = [
      {
        name: "navbar.officialWebsite",
        link: `https://higress.io/${officialSiteLang}/`,
      },
      {
        name: "navbar.docs",
        link: `https://higress.io/${officialSiteLang}/docs/overview/what-is-higress/`,
      },
      {
        name: "navbar.commercial",
        link: `https://www.aliyun.com/product/apigateway?spm=higress-console.topbar.0.0.0`,
      },
      {
        name: "navbar.developers",
        link: `https://higress.io/${officialSiteLang}/docs/developers/developers_dev/`,
      },
      {
        name: "navbar.blog",
        link: `https://higress.io/${officialSiteLang}/blog/`,
      },
      {
        name: "navbar.community",
        link: `https://higress.io/${officialSiteLang}/community/`,
      },
      {
        name: "navbar.download",
        link: "https://github.com/alibaba/higress/releases",
      },
    ];
  }
}
