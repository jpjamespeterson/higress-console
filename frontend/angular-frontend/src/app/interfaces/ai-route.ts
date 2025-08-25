import { RoutePredicate } from "./route";

export interface AiRoute {
  name: string;
  domains: string[];
  pathPredicate: RoutePredicate;
  modelPredicates: RoutePredicate[];
  upstreams: AiUpstream[];
  fallbackUpstream: AiUpstream;
  authConfig: any;
  version: string;
  key: string;
}

export interface AiUpstream {
  provider: string;
  weight: number;
}
