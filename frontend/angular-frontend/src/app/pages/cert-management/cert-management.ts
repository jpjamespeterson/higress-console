import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { TlsCertificateService } from "src/app/services/tls-certificate.service";
import { TlsCertificate } from "src/app/interfaces/tls-certificate";

@Component({
  selector: "app-cert-management",
  templateUrl: "./cert-management.html",
  styleUrls: ["./cert-management.scss"]
})
export class CertManagementComponent implements OnInit {
  dataSource$: Observable<TlsCertificate[]>;
  columns = [
    {
      title: "tlsCertificate.columns.name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "tlsCertificate.columns.domains",
      dataIndex: "domains",
      key: "domains",
    },
    {
      title: "tlsCertificate.columns.validityStart",
      dataIndex: "validityStart",
      key: "validityStart",
    },
    {
      title: "tlsCertificate.columns.validityEnd",
      dataIndex: "validityEnd",
      key: "validityEnd",
    },
    {
      title: "tlsCertificate.columns.action",
      dataIndex: "action",
      key: "action",
    },
  ];
  openDrawer = false;
  openModal = false;
  currentTlsCertificate: TlsCertificate;
  form: FormGroup;

  constructor(
    private tlsCertificateService: TlsCertificateService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      cert: ["", Validators.required],
      key: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.dataSource$ = this.tlsCertificateService.getTlsCertificates();
  }

  onEditDrawer(tlsCertificate: TlsCertificate) {
    this.currentTlsCertificate = tlsCertificate;
    this.form.patchValue(tlsCertificate);
    this.openDrawer = true;
  }

  onShowDrawer() {
    this.currentTlsCertificate = null;
    this.form.reset();
    this.openDrawer = true;
  }

  handleDrawerOK() {
    if (this.form.valid) {
      if (this.currentTlsCertificate) {
        this.tlsCertificateService.updateTlsCertificate({ ...this.currentTlsCertificate, ...this.form.value }).subscribe(() => {
          this.dataSource$ = this.tlsCertificateService.getTlsCertificates();
          this.openDrawer = false;
        });
      } else {
        this.tlsCertificateService.addTlsCertificate(this.form.value).subscribe(() => {
          this.dataSource$ = this.tlsCertificateService.getTlsCertificates();
          this.openDrawer = false;
        });
      }
    }
  }

  handleDrawerCancel() {
    this.openDrawer = false;
  }

  onShowModal(tlsCertificate: TlsCertificate) {
    this.currentTlsCertificate = tlsCertificate;
    this.openModal = true;
  }

  handleModalOk() {
    this.tlsCertificateService.deleteTlsCertificate(this.currentTlsCertificate.name).subscribe(() => {
      this.dataSource$ = this.tlsCertificateService.getTlsCertificates();
      this.openModal = false;
    });
  }

  handleModalCancel() {
    this.openModal = false;
  }
}
