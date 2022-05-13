import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionComponentsService {

  emailAmigo:string=""
  constructor(private http:HttpClient) { }
  
  setemailAmigo(id:string){
    this.emailAmigo=id;
  }
  getemailAmigo(){
     return this.emailAmigo
  }

}
