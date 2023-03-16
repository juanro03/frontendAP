import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuario : Usuario;

  constructor(private auth: Auth, private router: Router) { }

  login({email, password}: any) {
      return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  estadoSesion(){
    return authState(this.auth);
  }

}
