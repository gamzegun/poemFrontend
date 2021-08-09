import {
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {getToken, isTokenExpired} from "./helper/util";
import {catchError, finalize} from "rxjs/operators";
import Swal from 'sweetalert2'
import {throwError} from "rxjs";
import {environment} from "../environments/environment";
import {Router} from "@angular/router";

@Injectable({providedIn:'root'})
export class ServiceInterceptor implements HttpInterceptor{

  constructor(private route:Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let token = getToken();

    if ((isTokenExpired()||token === null) && window.location.href.includes(environment.adminUrl)
      && !window.location.href.includes('admin/login-page')) {
      this.route.navigate(['admin/login-page'])
    }
    else if (!window.location.href.includes(environment.adminUrl+"/login-page")){
      request = this.addAuthenticationToken(request);
    }

    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
/*
        Swal.fire('Hata', errorResponse.error.message, 'error');
*/
        return throwError(errorResponse);
      }),
    );
  }


  addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    const accessToken = getToken();
    if (!accessToken) {
      return request;
    }
    return request.clone({
      headers: new HttpHeaders().set("Authorization", `${getToken()}`)
    });
  }
}
