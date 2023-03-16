import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {

  descripcionExp:string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Experiencia(this.descripcionExp);
    this.experienciaService.addExperiencia(exp).subscribe(
      data=>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, error =>{
        alert("Falló");
        this.router.navigate(['']);
      })
  }

}
