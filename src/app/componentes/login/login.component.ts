import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario: FormGroup;
  

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginUsuario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onLogin() {
    const respuesta = await this.authService.login(this.loginUsuario.value)
      .catch(error => {console.log(error), alert("Error! email/contraseña invalidos")
    })
      if(respuesta){
        console.log('res ->', respuesta);
        this.router.navigate(['']);
      }
  }

  atras(){
    this.router.navigate(['']);
  }

  /*onClick() {
    this.authService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => console.log(error))
  }*/

}
