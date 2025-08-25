import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { PluginService } from "src/app/services/plugin.service";
import { WasmPluginData } from "src/app/interfaces/wasm-plugin";

@Component({
  selector: "app-plugin-management",
  templateUrl: "./plugin-management.html",
  styleUrls: ["./plugin-management.scss"]
})
export class PluginManagementComponent implements OnInit {
  dataSource$: Observable<WasmPluginData[]>;
  columns = [
    {
      title: "plugins.title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "plugins.description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "misc.actions",
      dataIndex: "action",
      key: "action",
    },
  ];
  openDrawer = false;
  currentPlugin: WasmPluginData;
  form: FormGroup;
  name: string;
  type: string;
  routeDetail$: Observable<any>;

  constructor(
    private pluginService: PluginService,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      title: ["", Validators.required],
      description: ["", Validators.required],
      enabled: [false]
    });
  }

  ngOnInit(): void {
    this.dataSource$ = this.pluginService.getWasmPlugins();
    this.name = this.route.snapshot.queryParamMap.get("name");
    this.type = this.route.snapshot.queryParamMap.get("type");
    if (this.name && this.type === "route") {
      this.routeDetail$ = this.pluginService.getGatewayRouteDetail(this.name);
    }
  }

  onEditDrawer(plugin: WasmPluginData) {
    this.currentPlugin = plugin;
    this.form.patchValue(plugin);
    this.openDrawer = true;
  }

  onShowDrawer() {
    this.currentPlugin = null;
    this.form.reset();
    this.openDrawer = true;
  }

  handleDrawerOK() {
    if (this.form.valid) {
      if (this.currentPlugin) {
        this.pluginService.updateWasmPlugin(this.currentPlugin.name, this.form.value).subscribe(() => {
          this.dataSource$ = this.pluginService.getWasmPlugins();
          this.openDrawer = false;
        });
      } else {
        this.pluginService.createWasmPlugin(this.form.value).subscribe(() => {
          this.dataSource$ = this.pluginService.getWasmPlugins();
          this.openDrawer = false;
        });
      }
    }
  }

  handleDrawerCancel() {
    this.openDrawer = false;
  }

  onDelete(name: string) {
    this.pluginService.deleteWasmPlugin(name).subscribe(() => {
      this.dataSource$ = this.pluginService.getWasmPlugins();
    });
  }

  goBack() {
    this.router.navigate([`/${this.type}`]);
  }
}
