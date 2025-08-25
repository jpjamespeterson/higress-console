import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { ConsumerService } from "src/app/services/consumer.service";
import { Consumer, CredentialType } from "src/app/interfaces/consumer";

@Component({
  selector: "app-consumer-management",
  templateUrl: "./consumer-management.html",
  styleUrls: ["./consumer-management.scss"]
})
export class ConsumerManagementComponent implements OnInit {
  dataSource$: Observable<Consumer[]>;
  columns = [
    {
      title: "consumer.columns.name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "consumer.columns.authMethods",
      dataIndex: "credentials",
      key: "credentials",
    },
    {
      title: "misc.actions",
      dataIndex: "action",
      key: "action",
    },
  ];
  openDrawer = false;
  openModal = false;
  currentConsumer: Consumer;
  form: FormGroup;

  constructor(
    private consumerService: ConsumerService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      credentials: [[]]
    });
  }

  ngOnInit(): void {
    this.dataSource$ = this.consumerService.getConsumers();
  }

  onEditDrawer(consumer: Consumer) {
    this.currentConsumer = consumer;
    this.form.patchValue(consumer);
    this.openDrawer = true;
  }

  onShowDrawer() {
    this.currentConsumer = null;
    this.form.reset();
    this.openDrawer = true;
  }

  handleDrawerOK() {
    if (this.form.valid) {
      if (this.currentConsumer) {
        this.consumerService.updateConsumer({ ...this.currentConsumer, ...this.form.value }).subscribe(() => {
          this.dataSource$ = this.consumerService.getConsumers();
          this.openDrawer = false;
        });
      } else {
        this.consumerService.addConsumer(this.form.value).subscribe(() => {
          this.dataSource$ = this.consumerService.getConsumers();
          this.openDrawer = false;
        });
      }
    }
  }

  handleDrawerCancel() {
    this.openDrawer = false;
  }

  onShowModal(consumer: Consumer) {
    this.currentConsumer = consumer;
    this.openModal = true;
  }

  handleModalOk() {
    this.consumerService.deleteConsumer(this.currentConsumer.name).subscribe(() => {
      this.dataSource$ = this.consumerService.getConsumers();
      this.openModal = false;
    });
  }

  handleModalCancel() {
    this.openModal = false;
  }

  getCredentialType(type: string) {
    const credentialType = CredentialType[type];
    return credentialType ? credentialType.displayName : type;
  }

  getCredentialColor(type: string) {
    const credentialType = CredentialType[type];
    return credentialType ? credentialType.displayColor : "black";
  }
}
