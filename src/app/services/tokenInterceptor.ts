import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../modules/user/services/auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token =""
    const tokenHandler = (Token)=>{
        token = Token
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
          next.handle(request);
    }
    this.auth.getPromisedToken().then(tokenHandler)
    
   
    return 
  }
}