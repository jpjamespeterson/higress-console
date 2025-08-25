export interface Service {
  name: string;
  port: number;
  namespace: string;
  endpoints: string[];
  key: string;
}

export function serviceToString(service: Service): string {
  return `${service.namespace}/${service.name}:${service.port}`;
}
