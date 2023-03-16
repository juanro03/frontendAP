import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { AuthService } from 'src/app/servicios/auth.service';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  public skill:Skill[]=[];
  isLogged=false;

  constructor(private skillService:SkillService, private authService:AuthService) {
    this.authService.estadoSesion().subscribe(res => {
      if(res){
        console.log('está logeado');
        this.isLogged=true;
      }else {
        console.log('no está logeado');
        this.isLogged=false;
      }})
   }

  ngOnInit(): void {
    this.cargarSkill();
  }
  
  cargarSkill():void{
    this.skillService.getSkill().subscribe(data => {this.skill = data;})
  }


  delete(id?: number){
    if(id != undefined){
      this.skillService.deleteSkill(id).subscribe(
        data => {
          this.cargarSkill();
        }, error => {
          alert("No se pudo borrar");
        })
    }
  }
}
