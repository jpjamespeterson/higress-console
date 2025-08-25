import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { UserService } from "../../services/user.service";
import * as UserActions from "../actions/user.actions";

@Injectable()
export class UserEffects {
  loadUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserInfo),
      mergeMap(() =>
        this.userService.fetchUserInfo().pipe(
          map((userInfo) => UserActions.loadUserInfoSuccess({ userInfo })),
          catchError((error) => of(UserActions.loadUserInfoFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
