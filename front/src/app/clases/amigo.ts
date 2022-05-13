
export class Amigo {

    email:string
    name : string
    foto:string
    ciudad:string
    descripcion: string
    id_fotos:string

    constructor(descripcion:string,name:string,foto:string,ciudad:string,id_foto:string,email:string){
        this.email=email
        this.name=name;
        this.id_fotos=id_foto;
        this.foto=foto;
        this.ciudad=ciudad;
        this.descripcion=descripcion;
    
    }
}