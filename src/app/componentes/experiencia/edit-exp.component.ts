import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  exp : Experiencia = null;

  constructor(private experienciaService : ExperienciaService, private activatedRouter: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detailExperiencia(id).subscribe(
      data =>{
        this.exp = data;
      }, error =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.updateExperiencia(id, this.exp).subscribe(
      data=>{
        alert("Experiencia modificada");
        this.router.navigate(['']);
      }, error =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      })    
  }
}

