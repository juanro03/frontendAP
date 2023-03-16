import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sobremi } from 'src/app/models/sobremi';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-new-sobremi',
  templateUrl: './new-sobremi.component.html',
  styleUrls: ['./new-sobremi.component.css']
})
export class NewSobremiComponent implements OnInit {

  descripcionSobremi:string = '';

  constructor(private sobremiService: SobremiService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const sobremi = new Sobremi(this.descripcionSobremi);
    this.sobremiService.addSobremi(sobremi).subscribe(
      data=>{
        alert("Informacion añadida");
        this.router.navigate(['']);
      }, error =>{
        alert("Falló");
        this.router.navigate(['']);
      })
  }
}
