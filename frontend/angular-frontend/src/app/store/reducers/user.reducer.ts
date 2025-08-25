import { createReducer, on } from "@ngrx/store";
import { UserState } from "../models/user.model";
import * as UserActions from "../actions/user.actions";

export const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUserInfo, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserActions.loadUserInfoSuccess, (state, { userInfo }) => ({
    ...state,
    currentUser: userInfo,
    loading: false,
    error: null,
  })),
  on(UserActions.loadUserInfoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
