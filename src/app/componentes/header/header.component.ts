import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged=false;
https: any;

  constructor(
    private authService: AuthService,
    private router:Router) { 

      this.authService.estadoSesion().subscribe(res => {
        if(res){
          console.log('está logeado');
          this.isLogged=true;
        }else {
          console.log('no está logeado');
          this.isLogged=false;
        }})
    }

  ngOnInit():void {
  }

  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.authService.logout()
    .then(() => {
      alert("Sesión cerrada!")
      this.router.navigate(['']);
    })
    .catch((error) => {console.log(error)})
  }

}


