import { createReducer, on } from "@ngrx/store";
import { SystemState } from "../models/system.model";
import * as SystemActions from "../actions/system.actions";

export const initialState: SystemState = {
  systemInfo: null,
  loading: false,
  error: null,
};

export const systemReducer = createReducer(
  initialState,
  on(SystemActions.loadSystemInfo, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(SystemActions.loadSystemInfoSuccess, (state, { systemInfo }) => ({
    ...state,
    systemInfo,
    loading: false,
    error: null,
  })),
  on(SystemActions.loadSystemInfoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
