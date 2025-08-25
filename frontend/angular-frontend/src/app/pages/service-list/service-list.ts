import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { ServiceService } from "src/app/services/service.service";
import { Service } from "src/app/interfaces/service";
import { OptionItem } from "src/app/interfaces/common";
import { startWith, map } from "rxjs/operators";

@Component({
  selector: "app-service-list",
  templateUrl: "./service-list.html",
  styleUrls: ["./service-list.scss"]
})
export class ServiceListComponent implements OnInit {
  dataSource$: Observable<Service[]>;
  columns = [
    {
      title: "service.columns.name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "service.columns.port",
      dataIndex: "port",
      key: "port",
    },
    {
      title: "service.columns.namespace",
      dataIndex: "namespace",
      key: "namespace",
    },
    {
      title: "service.columns.endpoints",
      dataIndex: "endpoints",
      key: "endpoints",
    },
  ];
  form: FormGroup;
  namespaces$: Observable<OptionItem[]>;

  constructor(
    private serviceService: ServiceService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [""],
      namespace: [""]
    });
  }

  ngOnInit(): void {
    this.dataSource$ = this.serviceService.getGatewayServices();
    this.namespaces$ = this.dataSource$.pipe(
      map(services => {
        const namespaces = new Set<string>();
        services.forEach(service => namespaces.add(service.namespace));
        return Array.from(namespaces).map(ns => ({ label: ns, value: ns }));
      })
    );

    this.form.valueChanges.pipe(
      startWith(this.form.value)
    ).subscribe(value => {
      this.dataSource$ = this.serviceService.getGatewayServices().pipe(
        map(services => {
          let filteredServices = services;
          if (value.name) {
            filteredServices = filteredServices.filter(service => service.name.includes(value.name));
          }
          if (value.namespace) {
            filteredServices = filteredServices.filter(service => service.namespace === value.namespace);
          }
          return filteredServices;
        })
      );
    });
  }

  onReset() {
    this.form.reset({ name: "", namespace: "" });
  }

  refresh() {
    this.dataSource$ = this.serviceService.getGatewayServices();
  }
}
