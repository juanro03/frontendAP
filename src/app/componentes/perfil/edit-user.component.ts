import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  usuario: Usuario = new Usuario("","","","","");

  constructor(private usuarioService : UsuarioService, private activatedRouter: ActivatedRoute, private router : Router) { }
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.usuarioService.detailUsuario(id).subscribe(
      data =>{
        this.usuario = data;
      }, error =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.usuarioService.updateUsuario(id, this.usuario).subscribe(
      data=>{
        alert("Usuario modificado");
        this.router.navigate(['']);
      }, error =>{
        alert("Error al modificar usuario");
        this.router.navigate(['']);
      }) 
  }

  uploadImage($event:any){
    
  }
}
