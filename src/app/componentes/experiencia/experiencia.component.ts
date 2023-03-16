import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { AuthService } from 'src/app/servicios/auth.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public exp:Experiencia[]=[];
  isLogged=false;

  constructor(private experienciasService:ExperienciaService, private authService:AuthService) { 
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
    this.cargarExperiencia();
  }
  
  cargarExperiencia():void{
    this.experienciasService.getExperiencia().subscribe(data => {this.exp = data;})
  }


  delete(id?: number){
    if(id != undefined){
      this.experienciasService.deleteExperiencia(id).subscribe(
        data => {
          this.cargarExperiencia(); 
        }, error => {
          alert("No se pudo borrar");
        })
    }
  }

}
