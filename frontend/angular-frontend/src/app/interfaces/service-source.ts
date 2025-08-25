export interface ServiceSource {
  name: string;
  type: string;
  domain: string;
  port: number;
  protocol: string;
  proxyName: string;
  internal: boolean;
  builtIn: boolean;
  key: string;
  version: string;
}

export interface ServiceSourceFormProps {
  name: string;
  type: string;
  domain: string;
  port: number;
  protocol: string;
  proxyName: string;
}

export const ServiceSourceTypes = {
  Kubernetes: {
    name: "Kubernetes",
    i18n: true
  },
  Nacos: {
    name: "Nacos",
    i18n: true
  },
  Zookeeper: {
    name: "Zookeeper",
    i18n: true
  },
  Consul: {
    name: "Consul",
    i18n: true
  },
  Static: {
    name: "Static Addresses",
    i18n: true
  },
  Dns: {
    name: "Domains",
    i18n: true
  }
};

export const ServiceProtocols = {
  http: {
    name: "HTTP"
  },
  https: {
    name: "HTTPS"
  },
  grpc: {
    name: "gRPC"
  }
};
