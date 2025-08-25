import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { isDevMode } from "@angular/core";
import { userReducer } from "./user.reducer";
import { systemReducer } from "./system.reducer";
import { configReducer } from "./config.reducer";
import { UserState } from "../models/user.model";
import { SystemState } from "../models/system.model";
import { ConfigState } from "../models/config.model";

export interface AppState {
  user: UserState;
  system: SystemState;
  config: ConfigState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  system: systemReducer,
  config: configReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
