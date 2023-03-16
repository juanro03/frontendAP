export class Usuario{
    idUser?:number;
    nombre:string;
    imagenUsuario:string;
    bannerUsuario:string;
    descUsuario:string;
    ubiUsuario:string;

    constructor(nombre:string,imagenUsuario:string,bannerUsuario:string,descUsuario:string,ubiUsuario:string){
        this.nombre = nombre;
        this.imagenUsuario = imagenUsuario;
        this.bannerUsuario = bannerUsuario;
        this.descUsuario = descUsuario;
        this.ubiUsuario = ubiUsuario;
    }
}