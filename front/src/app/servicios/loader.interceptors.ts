import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptors implements HttpInterceptor{
contador=0;
   constructor(public loadService:LoaderService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.loadService.show()
    
    return next.handle(req).pipe(
        
        finalize( () => 
        
        this.loadService.hide())
    );
   ;
   
 
  }
}