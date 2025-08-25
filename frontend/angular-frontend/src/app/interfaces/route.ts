export interface Route {
  name: string;
  domains: string[];
  headers: KeyedRoutePredicate[];
  methods: string[];
  path: RoutePredicate;
  urlParams: KeyedRoutePredicate[];
  services: UpstreamService[];
  customConfigs: {
    [key: string]: string;
  };
  authConfig: any;
  version: string;
  key: string;
  id: string;
  internal: boolean;
}

export interface RoutePredicate {
  matchType: string;
  matchValue: string;
  caseSensitive: boolean;
  ignoreCase: string;
}

export interface KeyedRoutePredicate extends RoutePredicate {
  key: string;
}

export interface UpstreamService {
  name: string;
}

export interface RouteResponse extends Array<Route> {}

export function upstreamServiceToString(service: UpstreamService): string {
  return service.name;
}
