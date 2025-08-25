export interface Domain {
  id: string;
  name: string;
  enableHttps: EnableHttpsValue;
  protocol: Protocol;
  certIdentifier: string;
  mustHttps: boolean[];
  version: string;
  key: string;
}

export const DEFAULT_DOMAIN = "*";

export enum EnableHttpsValue {
  off = 0,
  on = 1,
  force = 2,
}

export enum Protocol {
  http = "http",
  https = "https",
}

export interface DomainResponse extends Array<Domain> {}
