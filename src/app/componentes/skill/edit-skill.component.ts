import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = null;

  constructor(private skillService : SkillService, private activatedRouter: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detailSkill(id).subscribe(
      data =>{
        this.skill = data;
      }, error =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.updateSkill(id, this.skill).subscribe(
      data=>{
        alert("Skill modificada");
        this.router.navigate(['']);
      }, error =>{
        alert("Error al modificar skill");
        this.router.navigate(['']);
      })    
  }
}
