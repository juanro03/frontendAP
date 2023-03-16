import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreSkill:string = '';
  porcSkill:number = 0;

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombreSkill, this.porcSkill);
    this.skillService.addSkill(skill).subscribe(
      data=>{
        alert("Skill añadida");
        this.router.navigate(['']);
      }, error =>{
        alert("Falló");
        this.router.navigate(['']);
      })
  }

}
