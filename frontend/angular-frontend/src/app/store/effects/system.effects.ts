import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { SystemService } from "../../services/system.service";
import * as SystemActions from "../actions/system.actions";

@Injectable()
export class SystemEffects {
  loadSystemInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SystemActions.loadSystemInfo),
      mergeMap(() =>
        this.systemService.getSystemInfo().pipe(
          map((systemInfo) => SystemActions.loadSystemInfoSuccess({ systemInfo })),
          catchError((error) => of(SystemActions.loadSystemInfoFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private systemService: SystemService
  ) {}
}
