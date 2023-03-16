import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { AuthService } from 'src/app/servicios/auth.service';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public edu:Educacion[]=[];
  isLogged=false;

  constructor(private educacionesService:EducacionService, private authService: AuthService) {
    this.authService.estadoSesion().subscribe(res => {
      if(res){
        console.log('está logeado');
        this.isLogged=true;
      }else {
        console.log('no está logeado');
        this.isLogged=false;
      }})
   }

  ngOnInit(): void {
    this.cargarEducacion();
  }
  
  cargarEducacion():void{
    this.educacionesService.getEducacion().subscribe(data => {this.edu = data;})
  }


  delete(id?: number){
    if(id != undefined){
      this.educacionesService.deleteEducacion(id).subscribe(
        data => {
          this.cargarEducacion(); 
        }, error => {
          alert("No se pudo borrar");
        })
    }
  }
}
