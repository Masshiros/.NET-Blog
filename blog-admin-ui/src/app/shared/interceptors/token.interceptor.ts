import { Injectable } from '@angular/core';
import {
  AdminApiTokenApiClient,
  AuthenticatedResult,
  TokenRequest,
} from './../../api/admin-api.service.generated';
import { TokenStorageService } from './../services/token-storage.service';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  switchMap,
  take,
  throwError,
} from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(
    private tokenService: TokenStorageService,
    private tokenApiClient: AdminApiTokenApiClient
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;

    const token = this.tokenService.getToken();

    if (token != null) {
      authReq = this.addTokenHeader(authReq, token);
    }

    return next.handle(authReq).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !authReq.url.includes('auth/login') &&
          error.status === 401
        ) {
          return this.handle401Error(authReq, next);
        }
        ``;
        return throwError(error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const token = this.tokenService.getToken();
      const refreshToken = this.tokenService.getRefreshToken();

      var tokenRequest: TokenRequest = new TokenRequest({
        accessToken: token!,
        refreshToken: refreshToken!,
      });

      if (token) {
        return this.tokenApiClient.refresh(tokenRequest).pipe(
          switchMap((authResponse: AuthenticatedResult) => {
            this.isRefreshing = false;

            this.tokenService.saveToken(authResponse.token!);
            this.tokenService.saveRefreshToken(authResponse.refreshToken!);
            this.refreshTokenSubject.next(authResponse.token);

            return next.handle(
              this.addTokenHeader(request, authResponse.token!)
            );
          }),
          catchError((err) => {
            this.isRefreshing = false;
            this.tokenService.signOut();

            return throwError(err);
          })
        );
      }
    }

    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set(TOKEN_HEADER_KEY, `Bearer ${token}`),
    });
  }
}
