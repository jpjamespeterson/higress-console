import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { ServiceSourceService } from "src/app/services/service-source.service";
import { ServiceSource, ServiceSourceTypes, ServiceProtocols } from "src/app/interfaces/service-source";
import { Mode } from "src/app/interfaces/config";

@Component({
  selector: "app-service-source",
  templateUrl: "./service-source.html",
  styleUrls: ["./service-source.scss"]
})
export class ServiceSourceComponent implements OnInit {
  dataSource$: Observable<ServiceSource[]>;
  columns = [
    {
      title: "serviceSource.columns.type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "serviceSource.columns.name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "serviceSource.columns.domain",
      dataIndex: "domain",
      key: "domain",
    },
    {
      title: "serviceSource.columns.port",
      dataIndex: "port",
      key: "port",
    },
    {
      title: "serviceSource.columns.protocol",
      dataIndex: "protocol",
      key: "protocol",
    },
    {
      title: "serviceSource.columns.proxyName",
      dataIndex: "proxyName",
      key: "proxyName",
    },
    {
      title: "serviceSource.columns.action",
      dataIndex: "action",
      key: "action",
    },
  ];
  openDrawer = false;
  openModal = false;
  currentServiceSource: ServiceSource;
  form: FormGroup;
  mode$: Observable<string>;
  ServiceSourceTypes = ServiceSourceTypes;
  ServiceProtocols = ServiceProtocols;
  objectKeys = Object.keys;

  constructor(
    private serviceSourceService: ServiceSourceService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      type: ["", Validators.required],
      domain: ["", Validators.required],
      port: ["", Validators.required],
      protocol: ["", Validators.required],
      proxyName: [""]
    });
  }

  ngOnInit(): void {
    this.dataSource$ = this.serviceSourceService.getServiceSources();
    this.mode$ = this.store.select(state => state.config.properties?.mode || Mode.K8S);
  }

  onEditDrawer(serviceSource: ServiceSource) {
    this.currentServiceSource = serviceSource;
    this.form.patchValue(serviceSource);
    this.openDrawer = true;
  }

  onShowDrawer() {
    this.currentServiceSource = null;
    this.form.reset();
    this.openDrawer = true;
  }

  handleDrawerOK() {
    if (this.form.valid) {
      if (this.currentServiceSource) {
        this.serviceSourceService.updateServiceSource({ ...this.currentServiceSource, ...this.form.value }).subscribe(() => {
          this.dataSource$ = this.serviceSourceService.getServiceSources();
          this.openDrawer = false;
        });
      } else {
        this.serviceSourceService.addServiceSource(this.form.value).subscribe(() => {
          this.dataSource$ = this.serviceSourceService.getServiceSources();
          this.openDrawer = false;
        });
      }
    }
  }

  handleDrawerCancel() {
    this.openDrawer = false;
  }

  onShowModal(serviceSource: ServiceSource) {
    this.currentServiceSource = serviceSource;
    this.openModal = true;
  }

  handleModalOk() {
    this.serviceSourceService.deleteServiceSource(this.currentServiceSource.name).subscribe(() => {
      this.dataSource$ = this.serviceSourceService.getServiceSources();
      this.openModal = false;
    });
  }

  handleModalCancel() {
    this.openModal = false;
  }

  getServiceSourceName(type: string) {
    const serviceSourceType = ServiceSourceTypes[type];
    return serviceSourceType ? serviceSourceType.name : type;
  }

  getProtocolName(protocol: string) {
    const serviceProtocol = ServiceProtocols[protocol];
    return serviceProtocol ? serviceProtocol.name : protocol;
  }
}
