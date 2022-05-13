export class Notificacion {
    idObj:number
    idUser:string
    name : string
    tipo : string
    idDestino:string
    fecha:Date
    constructor(idObj:number,email:string,name:string,tipo:string,idDestino:string,fecha:Date){
        this.idUser=email
        this.name=name;
        this.tipo=tipo;
        this.idDestino=idDestino;
        this.fecha=fecha
        this.idObj=idObj
    }
}