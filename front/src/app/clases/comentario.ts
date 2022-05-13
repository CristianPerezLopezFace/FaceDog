export class Comentario {
    id:number
    idFoto:number
    emailUsuario : string
    nameUsuario: string
    texto:string
    fecha:string
    likes:[]
    constructor(id:number,idFoto:number,email:string,name:string,texto:string,fecha:string,likes:[]){
        this.id=id
        this.idFoto=idFoto
        this.emailUsuario=email;
        this.nameUsuario=name;
        this.texto=texto;
        this.fecha=fecha;
        this.likes=likes
    }
}