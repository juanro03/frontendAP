import { Component, OnInit } from '@angular/core';
import { Sobremi } from 'src/app/models/sobremi';
import { AuthService } from 'src/app/servicios/auth.service';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  public sobremi:Sobremi[]=[];
  isLogged=false;

  constructor(private sobremiService : SobremiService, private authService : AuthService) {
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
    this.cargarSobremi();
    
  }
    
  cargarSobremi():void{
    this.sobremiService.getSobremi().subscribe(data => {this.sobremi = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sobremiService.deleteSobremi(id).subscribe(
        data => {
          this.cargarSobremi(); 
        }, error => {
          alert("No se pudo borrar");
        })
    }
  }

}
