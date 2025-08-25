import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { RouteService } from "src/app/services/route.service";
import { Route, RoutePredicate, KeyedRoutePredicate, UpstreamService } from "src/app/interfaces/route";
import { Mode } from "src/app/interfaces/config";

@Component({
  selector: "app-route-config",
  templateUrl: "./route-config.html",
  styleUrls: ["./route-config.scss"]
})
export class RouteConfigComponent implements OnInit {
  dataSource$: Observable<Route[]>;
  columns = [
    {
      title: "route.columns.name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "route.columns.domains",
      dataIndex: "domains",
      key: "domains",
    },
    {
      title: "route.columns.routePredicates",
      dataIndex: "path",
      key: "path",
    },
    {
      title: "route.columns.services",
      dataIndex: "services",
      key: "services",
    },
    {
      title: "aiRoute.columns.auth",
      dataIndex: "authConfig.allowedConsumers",
      key: "authConfig.allowedConsumers",
    },
    {
      title: "route.columns.action",
      dataIndex: "action",
      key: "action",
    },
  ];
  openDrawer = false;
  openModal = false;
  currentRoute: Route;
  form: FormGroup;
  mode$: Observable<string>;
  routeManagementSupported$: Observable<boolean>;

  constructor(
    private routeService: RouteService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      domains: [[]],
      headers: [[]],
      methods: [[]],
      path: this.fb.group({
        matchType: ["", Validators.required],
        matchValue: ["", Validators.required]
      }),
      urlParams: [[]],
      services: [[]],
      customConfigs: [{}],
      authConfig: [{}]
    });
  }

  ngOnInit(): void {
    this.dataSource$ = this.routeService.getGatewayRoutes();
    this.mode$ = this.store.select(state => state.config.properties?.mode || Mode.K8S);
    this.routeManagementSupported$ = this.store.select(state => state.system.systemInfo?.capabilities?.indexOf("config.ingress.v1") === -1);
  }

  onEditDrawer(route: Route) {
    this.currentRoute = route;
    this.form.patchValue(route);
    this.openDrawer = true;
  }

  onShowDrawer() {
    this.currentRoute = null;
    this.form.reset();
    this.openDrawer = true;
  }

  handleDrawerOK() {
    if (this.form.valid) {
      if (this.currentRoute) {
        this.routeService.updateGatewayRoute({ ...this.currentRoute, ...this.form.value }).subscribe(() => {
          this.dataSource$ = this.routeService.getGatewayRoutes();
          this.openDrawer = false;
        });
      } else {
        this.routeService.addGatewayRoute(this.form.value).subscribe(() => {
          this.dataSource$ = this.routeService.getGatewayRoutes();
          this.openDrawer = false;
        });
      }
    }
  }

  handleDrawerCancel() {
    this.openDrawer = false;
  }

  onShowModal(route: Route) {
    this.currentRoute = route;
    this.openModal = true;
  }

  handleModalOk() {
    this.routeService.deleteGatewayRoute(this.currentRoute.name).subscribe(() => {
      this.dataSource$ = this.routeService.getGatewayRoutes();
      this.openModal = false;
    });
  }

  handleModalCancel() {
    this.openModal = false;
  }

  getMatchType(matchType: string) {
    return `route.matchTypes.${matchType}`;
  }

  getUpstreamService(service: UpstreamService) {
    return `${service.name}`;
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
