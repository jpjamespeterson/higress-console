import { createReducer, on } from "@ngrx/store";
import { ConfigState } from "../models/config.model";
import * as ConfigActions from "../actions/config.actions";

export const initialState: ConfigState = {
  properties: null,
  loading: false,
  error: null,
};

export const configReducer = createReducer(
  initialState,
  on(ConfigActions.loadConfigs, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ConfigActions.loadConfigsSuccess, (state, { properties }) => ({
    ...state,
    properties,
    loading: false,
    error: null,
  })),
  on(ConfigActions.loadConfigsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
