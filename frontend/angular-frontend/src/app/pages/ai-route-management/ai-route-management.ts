import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { AiRouteService } from "src/app/services/ai-route.service";
import { AiRoute, AiUpstream } from "src/app/interfaces/ai-route";
import { RoutePredicate } from "src/app/interfaces/route";

@Component({
  selector: "app-ai-route-management",
  templateUrl: "./ai-route-management.html",
  styleUrls: ["./ai-route-management.scss"]
})
export class AiRouteManagementComponent implements OnInit {
  dataSource$: Observable<AiRoute[]>;
  columns = [
    {
      title: "aiRoute.columns.name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "aiRoute.columns.domains",
      dataIndex: "domains",
      key: "domains",
    },
    {
      title: "aiRoute.columns.pathPredicate",
      dataIndex: "pathPredicate",
      key: "pathPredicate",
    },
    {
      title: "aiRoute.columns.modelPredicates",
      dataIndex: "modelPredicates",
      key: "modelPredicates",
    },
    {
      title: "aiRoute.columns.upstreams",
      dataIndex: "upstreams",
      key: "upstreams",
    },
    {
      title: "aiRoute.columns.auth",
      dataIndex: "authConfig.allowedConsumers",
      key: "authConfig.allowedConsumers",
    },
    {
      title: "misc.actions",
      dataIndex: "action",
      key: "action",
    },
  ];
  openDrawer = false;
  openModal = false;
  currentAiRoute: AiRoute;
  form: FormGroup;
  usageDrawer = false;
  usageCommand = "";

  constructor(
    private aiRouteService: AiRouteService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      domains: [[]],
      pathPredicate: this.fb.group({
        matchType: ["", Validators.required],
        matchValue: ["", Validators.required]
      }),
      modelPredicates: [[]],
      upstreams: [[]],
      fallbackUpstream: [null],
      authConfig: [{}]
    });
  }

  ngOnInit(): void {
    this.dataSource$ = this.aiRouteService.getAiRoutes();
  }

  onEditDrawer(aiRoute: AiRoute) {
    this.currentAiRoute = aiRoute;
    this.form.patchValue(aiRoute);
    this.openDrawer = true;
  }

  onShowDrawer() {
    this.currentAiRoute = null;
    this.form.reset();
    this.openDrawer = true;
  }

  handleDrawerOK() {
    if (this.form.valid) {
      if (this.currentAiRoute) {
        this.aiRouteService.updateAiRoute({ ...this.currentAiRoute, ...this.form.value }).subscribe(() => {
          this.dataSource$ = this.aiRouteService.getAiRoutes();
          this.openDrawer = false;
        });
      } else {
        this.aiRouteService.addAiRoute(this.form.value).subscribe(() => {
          this.dataSource$ = this.aiRouteService.getAiRoutes();
          this.openDrawer = false;
        });
      }
    }
  }

  handleDrawerCancel() {
    this.openDrawer = false;
  }

  onShowModal(aiRoute: AiRoute) {
    this.currentAiRoute = aiRoute;
    this.openModal = true;
  }

  handleModalOk() {
    this.aiRouteService.deleteAiRoute(this.currentAiRoute.name).subscribe(() => {
      this.dataSource$ = this.aiRouteService.getAiRoutes();
      this.openModal = false;
    });
  }

  handleModalCancel() {
    this.openModal = false;
  }

  onUsageDrawer(aiRoute: AiRoute) {
    this.usageCommand = this.buildUsageCommand(aiRoute);
    this.usageDrawer = true;
  }

  closeUsage() {
    this.usageDrawer = false;
  }

  buildUsageCommand(aiRoute: AiRoute): string {
    let command = `curl -sv http://<higress-gateway-ip>/v1/chat/completions \\
    -X POST \\
    -H Content-Type: application/json`;
    if (aiRoute.domains && aiRoute.domains.length) {
      command += ` \\
    -H Host: ${aiRoute.domains[0]}`;
    }
    command += ` \\
    -d \\
{
  "model": "<model-name>",
  "messages": [
    {
      "role": "user",
      "content": "Hello!"
    }
  ]
}`;
    return command;
  }

  getMatchType(matchType: string) {
    return `route.matchTypes.${matchType}`;
  }

  getUpstreams(upstreams: AiUpstream[], fallbackUpstream: AiUpstream) {
    const elements: string[] = [];
    if (upstreams.length === 1) {
      elements.push(upstreams[0].provider);
    } else {
      upstreams.forEach(upstream => {
        elements.push(`${upstream.provider}: ${upstream.weight}%`);
      });
    }
    if (fallbackUpstream?.provider) {
      elements.push(`-> ${fallbackUpstream.provider}`);
    }
    return elements.join(", ");
  }

  getAuthConfig(authConfig: any) {
    if (!authConfig || !authConfig.enabled) {
      return "aiRoute.authNotEnabled";
    }
    if (!Array.isArray(authConfig.allowedConsumers) || !authConfig.allowedConsumers.length) {
      return "aiRoute.authEnabledWithoutConsumer";
    }
    return authConfig.allowedConsumers.join(", ");
  }
}
