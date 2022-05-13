import { Comentario } from "./comentario"

export class Foto {

    id:number
    titulo:string
    descripcion : string
    foto:string
    email:string
    principal: number 
    comentarios : Comentario[]
    likes:[]
    fechaModificacion:Date
    tipo:string
 

    constructor(titulo:string,descrpcion:string,foto:string,email:string,principal:number,id:number,comentarios:Comentario[],likes:[],fecha:Date,tipo:string){
        this.id=id
        this.titulo=titulo;
        this.descripcion=descrpcion;
        this.foto=foto;
        this.email=email;
        this.principal=principal
        this.comentarios=comentarios
        this.likes=likes
        this.fechaModificacion=fecha
        this.tipo=tipo
    }
    setTitulo(titulo:string){
        this.titulo=titulo
    }
    setDescripcion(descr:string){
        this.descripcion=descr
    }
}
