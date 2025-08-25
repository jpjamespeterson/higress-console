import { createAction, props } from "@ngrx/store";
import { UserInfo } from "../models/user.model";

export const loadUserInfo = createAction("[User] Load User Info");

export const loadUserInfoSuccess = createAction(
  "[User] Load User Info Success",
  props<{ userInfo: UserInfo }>()
);

export const loadUserInfoFailure = createAction(
  "[User] Load User Info Failure",
  props<{ error: any }>()
);
