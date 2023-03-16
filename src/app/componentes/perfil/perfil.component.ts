import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  usuario : Usuario = new Usuario("","","","","");
  isLogged=false;

  constructor(private usuarioService:UsuarioService, private authService:AuthService) {
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
    this.cargarUsuario();
  }
  
  cargarUsuario():void{
    this.usuarioService.detailUsuario(1).subscribe(data => {this.usuario = data;})
  }

}
