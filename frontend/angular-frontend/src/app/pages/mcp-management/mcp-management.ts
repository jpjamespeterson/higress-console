import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/reducers";
import { McpService } from "src/app/services/mcp.service";
import { McpServer, SERVICE_TYPES } from "src/app/interfaces/mcp";
import { Router } from "@angular/router";

@Component({
  selector: "app-mcp-management",
  templateUrl: "./mcp-management.html",
  styleUrls: ["./mcp-management.scss"]
})
export class McpManagementComponent implements OnInit {
  dataSource$: Observable<McpServer[]>;
  columns = [
    {
      title: "mcp.columns.name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "mcp.columns.description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "mcp.columns.type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "mcp.columns.action",
      dataIndex: "action",
      key: "action",
    },
  ];
  openDrawer = false;
  openModal = false;
  currentMcpServer: McpServer;
  form: FormGroup;
  searchForm: FormGroup;
  serviceTypes = SERVICE_TYPES;

  constructor(
    private mcpService: McpService,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      type: ["", Validators.required]
    });
    this.searchForm = this.fb.group({
      name: [""],
      type: [""]
    });
  }

  ngOnInit(): void {
    this.dataSource$ = this.mcpService.listMcpServers({});
  }

  onEditDrawer(mcpServer: McpServer) {
    this.currentMcpServer = mcpServer;
    this.form.patchValue(mcpServer);
    this.openDrawer = true;
  }

  onShowDrawer() {
    this.currentMcpServer = null;
    this.form.reset();
    this.openDrawer = true;
  }

  handleDrawerOK() {
    if (this.form.valid) {
      this.mcpService.createOrUpdateMcpServer(this.form.value).subscribe(() => {
        this.dataSource$ = this.mcpService.listMcpServers({});
        this.openDrawer = false;
      });
    }
  }

  handleDrawerCancel() {
    this.openDrawer = false;
  }

  onShowModal(mcpServer: McpServer) {
    this.currentMcpServer = mcpServer;
    this.openModal = true;
  }

  handleModalOk() {
    this.mcpService.deleteMcpServer(this.currentMcpServer.name).subscribe(() => {
      this.dataSource$ = this.mcpService.listMcpServers({});
      this.openModal = false;
    });
  }

  handleModalCancel() {
    this.openModal = false;
  }

  onSearch() {
    this.dataSource$ = this.mcpService.listMcpServers(this.searchForm.value);
  }

  onReset() {
    this.searchForm.reset();
    this.dataSource$ = this.mcpService.listMcpServers({});
  }

  goToDetail(name: string) {
    this.router.navigate(["/mcp/detail"], { queryParams: { name } });
  }
}
