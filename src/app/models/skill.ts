export class Skill{
    idSkill? : number;
    nombre : string;
    porcentaje : any;

    constructor(nombre:string, porcentaje:number){
        this.nombre = nombre;
        this.porcentaje = porcentaje; 
    }
}