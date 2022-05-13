import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { Login } from '../clases/login';
import { Foto } from '../clases/foto';
import { Amigo } from '../clases/amigo';
import { Notificacion } from '../clases/notificacion';
import { Comentario } from '../clases/comentario';
const  url = "https://apifacedog.herokuapp.com/";      
@Injectable({
  providedIn: 'root'
})
export class UsuriosService {

  constructor(private http:HttpClient) { }


  get_one_user(email: string): Observable<Usuario>{
         
    return this.http.get<Usuario>(url+"users/"+email)
  }
  get_one_user_by_id(id:number): Observable<Usuario>{
         
    return this.http.get<Usuario>(url+"users/id/"+id)
  }
  find_all_users(skip:number,limit:number,rol:string) : Observable<any>{
    return this.http.get<any>(url+"users/skip"+skip+"/limit"+limit+"/rol"+rol)
  }
  
  deleteUser(id:number) :Observable<any>{
      return this.http.delete<Usuario>(url+"users/"+id)
  }


  update_User(id:number,user:Usuario) : Observable<any>{
    return this.http.put<Usuario>(url+"users/"+id,user);
    
  }
  loging_User(login : Login): Observable<any>{
    return this.http.post<Login>(url+"userLogin",login)
  }
  create_user(user: Usuario) :Observable<any>{
    console.log(user)
    return this.http.post<Usuario>(url+"create/users",user)
  }
  addImage(foto:Foto) :Observable<any>{
   
    return this.http.post<Foto>(url+"imag",foto)
  }
  getImgPaginadas(skip:number,limit:number,email:string): Observable<any>{
    return this.http.get<any>(url+"users/skip"+skip+"/limit"+limit+"/email"+email)
} 

  addLikeImg(id_foto:number,id_user:number) : Observable<any>{
    return this.http.get<any>(url+"users/addLike/"+id_foto+"/"+id_user)
  } 

  
 addLikeComentario(id_foto:number,id_user:number,posicion:number) : Observable<any>{
    return this.http.get<any>(url+"users/addLikeComentario/"+id_foto+"/"+id_user+"/"+posicion)
  } 


  getAllImgVeter(): Observable<Foto[]>{
    return this.http.get<Foto[]>(url+"users/ImgVeterinario/")
  }
  getAllImgVeterByUser(email:string): Observable<Foto[]>{
    return this.http.get<Foto[]>(url+"users/ImgVeterinarioByUser/"+email)
  }
  getImagePrincipal(nameEmail:string): Observable<Foto>{    
    return this.http.get<Foto>(url+"users/imagenPrincipal/"+nameEmail)
  }
  getImage(id:number): Observable<Foto>{    
    return this.http.get<Foto>(url+"users/imagen/id/"+id)
  }
  getAllImg(nameEmail:string): Observable<Foto[]>{
    return this.http.get<Foto[]>(url+"users/allImagen/"+nameEmail)
  }
  updatePrincipalImg(foto:Foto):Observable<Foto>{
    return this.http.post<Foto>(url+"users/updatePrincipalImagen",foto)
  }
  updateImg(foto:Foto):Observable<string>{
    return this.http.post<string>(url+"users/updateImagen",foto)
  }
  deleteImg(foto:Foto):Observable<string>{
    return this.http.post<string>(url+"users/deleteImagen/byId",foto)
  }



  getAmigos(email:string): Observable<Amigo[]>{
    return this.http.get<Amigo[]>(url+"amigos/"+email)
  }
  getAllUsers(): Observable<Amigo[]>{
    return this.http.get<Amigo[]>(url+"Allusers/")
  }
  getAllVeterinarios(): Observable<Amigo[]>{
    return this.http.get<Amigo[]>(url+"Allveterinarios/")
  }


  setNotificaion(notificaion:Notificacion): Observable<any>{
    console.log(notificaion)
    return this.http.post<any>(url+"crearNotificacion/",notificaion)
  }
  getNotificacion(email:string): Observable<[Notificacion]>{
    return this.http.get<[Notificacion]>(url+"notificacion/"+email)
  }
  aceptarAmgio(notificacion:Notificacion): Observable<any>{
    return this.http.post<any>(url+"aceptarAmigo/",notificacion)
  }
  getOneComentarios(id:string,idComentario:number): Observable<Comentario>{
    return this.http.get<Comentario>(url+"comentarios/"+id+"/"+idComentario)
  }
  getComentarios(id:string): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(url+"comentarios_one/"+id)
  }
  createComentario(comentario:Comentario):Observable<any>{
    return this.http.post<any>(url+"crearComentario/",comentario)
  }

  borrarNotificacionComentario(notifica:Notificacion):Observable<any>{
    return this.http.post<any>(url+"borrarNotificacionComentario/",notifica)
  }

}