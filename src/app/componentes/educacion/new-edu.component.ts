import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { AuthService } from 'src/app/servicios/auth.service';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {

  descripcionEdu:string = '';

  constructor(private educacionService: EducacionService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.descripcionEdu);
    this.educacionService.addEducacion(edu).subscribe(
      data=>{
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, error =>{
        alert("Falló");
        this.router.navigate(['']);
      })
  }

}
