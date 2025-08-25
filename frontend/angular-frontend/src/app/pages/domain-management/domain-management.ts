import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { DomainService } from "src/app/services/domain.service";
import { Domain, DEFAULT_DOMAIN, EnableHttpsValue, Protocol } from "src/app/interfaces/domain";

@Component({
  selector: "app-domain-management",
  templateUrl: "./domain-management.html",
  styleUrls: ["./domain-management.scss"]
})
export class DomainManagementComponent implements OnInit {
  dataSource$: Observable<Domain[]>;
  columns = [
    {
      title: "domain.columns.name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "domain.columns.protocol",
      dataIndex: "protocol",
      key: "protocol",
    },
    {
      title: "domain.columns.certificate",
      dataIndex: "certIdentifier",
      key: "certIdentifier",
    },
    {
      title: "misc.actions",
      dataIndex: "action",
      key: "action",
    },
  ];
  openDrawer = false;
  openModal = false;
  currentDomain: Domain;
  form: FormGroup;

  constructor(
    private domainService: DomainService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      protocol: ["", Validators.required],
      certIdentifier: [""],
      mustHttps: [[]]
    });
  }

  ngOnInit(): void {
    this.dataSource$ = this.domainService.getGatewayDomains();
  }

  onEditDrawer(domain: Domain) {
    this.currentDomain = domain;
    this.form.patchValue(domain);
    this.openDrawer = true;
  }

  onShowDrawer() {
    this.currentDomain = null;
    this.form.reset();
    this.openDrawer = true;
  }

  handleDrawerOK() {
    if (this.form.valid) {
      const { name, protocol, certIdentifier, mustHttps } = this.form.value;
      const data: Partial<Domain> = { name: name || this.currentDomain?.name };
      let enableHttps = EnableHttpsValue.off;
      if (protocol === Protocol.https) {
        if (certIdentifier) {
          data.certIdentifier = certIdentifier;
        }
        enableHttps = mustHttps?.length ? EnableHttpsValue.force : EnableHttpsValue.on;
      }
      data.enableHttps = enableHttps;

      if (this.currentDomain?.version) {
        this.domainService.updateGatewayDomain({ ...this.currentDomain, ...data } as Domain).subscribe(() => {
          this.dataSource$ = this.domainService.getGatewayDomains();
          this.openDrawer = false;
        });
      } else {
        this.domainService.addGatewayDomain(data as Domain).subscribe(() => {
          this.dataSource$ = this.domainService.getGatewayDomains();
          this.openDrawer = false;
        });
      }
    }
  }

  handleDrawerCancel() {
    this.openDrawer = false;
  }

  onShowModal(domain: Domain) {
    this.currentDomain = domain;
    this.openModal = true;
  }

  handleModalOk() {
    this.domainService.deleteGatewayDomain(this.currentDomain.name).subscribe(() => {
      this.dataSource$ = this.domainService.getGatewayDomains();
      this.openModal = false;
    });
  }

  handleModalCancel() {
    this.openModal = false;
  }

  isDefaultDomain(name: string) {
    return name === DEFAULT_DOMAIN;
  }
}
