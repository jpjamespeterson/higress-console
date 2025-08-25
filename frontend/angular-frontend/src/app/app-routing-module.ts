import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./pages/login/login-module").then(m => m.LoginModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import("./pages/dashboard/dashboard-module").then(m => m.DashboardModule)
  },
  {
    path: "service-source",
    loadChildren: () => import("./pages/service-source/service-source-module").then(m => m.ServiceSourceModule)
  },
  {
    path: "service-list",
    loadChildren: () => import("./pages/service-list/service-list-module").then(m => m.ServiceListModule)
  },
  {
    path: "route-config",
    loadChildren: () => import("./pages/route-config/route-config-module").then(m => m.RouteConfigModule)
  },
  {
    path: "ai-service-management",
    loadChildren: () => import("./pages/ai-service-management/ai-service-management-module").then(m => m.AiServiceManagementModule)
  },
  {
    path: "ai-route-management",
    loadChildren: () => import("./pages/ai-route-management/ai-route-management-module").then(m => m.AiRouteManagementModule)
  },
  {
    path: "ai-dashboard",
    loadChildren: () => import("./pages/ai-dashboard/ai-dashboard-module").then(m => m.AiDashboardModule)
  },
  {
    path: "llm-provider-management",
    loadChildren: () => import("./pages/llm-provider-management/llm-provider-management-module").then(m => m.LlmProviderManagementModule)
  },
  {
    path: "domain-management",
    loadChildren: () => import("./pages/domain-management/domain-management-module").then(m => m.DomainManagementModule)
  },
  {
    path: "cert-management",
    loadChildren: () => import("./pages/cert-management/cert-management-module").then(m => m.CertManagementModule)
  },
  {
    path: "consumer-management",
    loadChildren: () => import("./pages/consumer-management/consumer-management-module").then(m => m.ConsumerManagementModule)
  },
  {
    path: "plugin-management",
    loadChildren: () => import("./pages/plugin-management/plugin-management-module").then(m => m.PluginManagementModule)
  },
  {
    path: "system-settings",
    loadChildren: () => import("./pages/system-settings/system-settings-module").then(m => m.SystemSettingsModule)
  },
  {
    path: "mcp-management",
    loadChildren: () => import("./pages/mcp-management/mcp-management-module").then(m => m.McpManagementModule)
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
