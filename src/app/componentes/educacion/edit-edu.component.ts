import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  edu: Educacion = null;

  constructor(private educacionService : EducacionService, private activatedRouter: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detailEducacion(id).subscribe(
      data =>{
        this.edu = data;
      }, error =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.updateEducacion(id, this.edu).subscribe(
      data=>{
        alert("Educacion modificada");
        this.router.navigate(['']);
      }, error =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      })    
  }
}

