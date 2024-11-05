import { inject } from '@angular/core';
import { HttpEvent, HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export const httpErrorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const router = inject(Router);

  return next(req).pipe(
    catchError(error => {
      if (error.status === 404) {
        router.navigate(['/not-found']);
      }
      return throwError(() => error);
    })
  );
};
