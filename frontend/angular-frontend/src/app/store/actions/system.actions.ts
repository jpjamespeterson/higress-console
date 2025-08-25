import { createAction, props } from "@ngrx/store";

export const loadSystemInfo = createAction("[System] Load System Info");

export const loadSystemInfoSuccess = createAction(
  "[System] Load System Info Success",
  props<{ systemInfo: any }>()
);

export const loadSystemInfoFailure = createAction(
  "[System] Load System Info Failure",
  props<{ error: any }>()
);
