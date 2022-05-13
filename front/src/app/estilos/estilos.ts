
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class estilosService {

        estilos = [
           {
             claro : "#dfd6d9",
             claroB : "#ba788f",
             claroC: "#963254",   
             oscuro : "#4d001a",
             fondo : "#963254"
           }
           
         ]
     

        
        misEstilos= new Subject <{}> ();

            cambiarEstilos(){
               console.log("cambiando estilos")
               this.estilos = [
                   {
                      claro : "#963254",
                      claroB : "#ga788f",
                      claroC: "#9g3254",
                      
                      oscuro : "#4g001a",
                      fondo : "#9g3254"
                    }
                    
                  ]
                  this.misEstilos.next(this.estilos[0])
               
            }
            getEstilos(){
               
                this.estilos = [
                    {
                    claro : "#dfd6d9",
                    claroB : "#ba788f",
                    claroC: "#963254",
                    
                    oscuro : "#4d001a",
                    fondo : "#963254"
                    }
                    
                ]
                return this.estilos[0]
            }
            



}