import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { SystemService } from "../../services/system.service";
import * as ConfigActions from "../actions/config.actions";

@Injectable()
export class ConfigEffects {
  loadConfigs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfigActions.loadConfigs),
      mergeMap(() =>
        this.systemService.getConfigs().pipe(
          map((properties) => ConfigActions.loadConfigsSuccess({ properties })),
          catchError((error) => of(ConfigActions.loadConfigsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private systemService: SystemService
  ) {}
}
