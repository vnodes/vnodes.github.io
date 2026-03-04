import type {
  HttpEvent,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import type { Observable } from 'rxjs';

const proxyUrl = 'http://localhost:3000';

export const proxyInterceptor: HttpInterceptorFn = <T>(
  req: HttpRequest<T>,
  next: (req: HttpRequest<T>) => Observable<HttpEvent<T>>
): Observable<HttpEvent<T>> => {
  if (req.url.startsWith('/api')) {
    const updatedReq = req.clone({
      url: `${proxyUrl}${req.url}`,
    });
    return next(updatedReq);
  }
  return next(req);
};
