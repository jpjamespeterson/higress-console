import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { LlmProviderService } from "src/app/services/llm-provider.service";
import { LlmProvider, aiModelProviders } from "src/app/interfaces/llm-provider";

@Component({
  selector: "app-llm-provider-management",
  templateUrl: "./llm-provider-management.html",
  styleUrls: ["./llm-provider-management.scss"]
})
export class AiServiceManagementComponent implements OnInit {
  dataSource$: Observable<LlmProvider[]>;
  columns = [
    {
      title: "llmProvider.columns.type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "llmProvider.columns.name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "service.columns.endpoints",
      dataIndex: "endpoints",
      key: "endpoints",
    },
    {
      title: "llmProvider.columns.tokens",
      dataIndex: "tokens",
      key: "tokens",
    },
    {
      title: "serviceSource.columns.proxyName",
      dataIndex: "proxyName",
      key: "proxyName",
    },
    {
      title: "misc.actions",
      dataIndex: "action",
      key: "action",
    },
  ];
  openDrawer = false;
  openModal = false;
  currentLlmProvider: LlmProvider;
  form: FormGroup;
  aiModelProviders = aiModelProviders;

  constructor(
    private llmProviderService: LlmProviderService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      type: ["", Validators.required],
      tokens: [[]],
      proxyName: [""]
    });
  }

  ngOnInit(): void {
    this.dataSource$ = this.llmProviderService.getLlmProviders();
  }

  onEditDrawer(llmProvider: LlmProvider) {
    this.currentLlmProvider = llmProvider;
    this.form.patchValue(llmProvider);
    this.openDrawer = true;
  }

  onShowDrawer() {
    this.currentLlmProvider = null;
    this.form.reset();
    this.openDrawer = true;
  }

  handleDrawerOK() {
    if (this.form.valid) {
      if (this.currentLlmProvider) {
        this.llmProviderService.updateLlmProvider({ ...this.currentLlmProvider, ...this.form.value }).subscribe(() => {
          this.dataSource$ = this.llmProviderService.getLlmProviders();
          this.openDrawer = false;
        });
      } else {
        this.llmProviderService.addLlmProvider(this.form.value).subscribe(() => {
          this.dataSource$ = this.llmProviderService.getLlmProviders();
          this.openDrawer = false;
        });
      }
    }
  }

  handleDrawerCancel() {
    this.openDrawer = false;
  }

  onShowModal(llmProvider: LlmProvider) {
    this.currentLlmProvider = llmProvider;
    this.openModal = true;
  }

  handleModalOk() {
    this.llmProviderService.deleteLlmProvider(this.currentLlmProvider.name).subscribe(() => {
      this.dataSource$ = this.llmProviderService.getLlmProviders();
      this.openModal = false;
    });
  }

  handleModalCancel() {
    this.openModal = false;
  }

  getProviderLabel(value: string) {
    const provider = this.aiModelProviders.find(p => p.value === value);
    return provider ? provider.label : value;
  }

  getEndpoints(provider: LlmProvider) {
    // I will implement this later
    return "-";
  }

  getTokens(provider: LlmProvider) {
    // I will implement this later
    return "-";
  }
}
