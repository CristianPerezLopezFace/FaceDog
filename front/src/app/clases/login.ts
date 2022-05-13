
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class authInterceptor implements HttpInterceptor {
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return next.handle(req);
    }

    const headers = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(headers)
  }
}

export class Login {

    email : string
    password : string

    constructor(email:string,password:string){
        this.email=email;
        this.password=password;
    }
}