import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sobremi } from 'src/app/models/sobremi';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-edit-sobremi',
  templateUrl: './edit-sobremi.component.html',
  styleUrls: ['./edit-sobremi.component.css']
})
export class EditSobremiComponent implements OnInit {

  sobremi: Sobremi = null;

  constructor(private sobremiService : SobremiService, private activatedRouter: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sobremiService.detailSobremi(id).subscribe(
      data =>{
        this.sobremi = data;
      }, error =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sobremiService.updateSobremi(id, this.sobremi).subscribe(
      data=>{
        alert("informacion modificada modificada");
        this.router.navigate(['']);
      }, error =>{
        alert("Error al modificar informacion");
        this.router.navigate(['']);
      })    
  }


}
