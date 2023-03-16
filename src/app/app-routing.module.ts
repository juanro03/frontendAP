import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditEduComponent } from './componentes/educacion/edit-edu.component';
import { NewEduComponent } from './componentes/educacion/new-edu.component';

import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

import { NewExpComponent } from './componentes/experiencia/new-exp.component';
import { EditExpComponent } from './componentes/experiencia/edit-exp.component';

import { NewSkillComponent } from './componentes/skill/new-skill.component';
import { EditSkillComponent } from './componentes/skill/edit-skill.component';

import { EditSobremiComponent } from './componentes/sobremi/edit-sobremi.component';
import { NewSobremiComponent } from './componentes/sobremi/new-sobremi.component';

import { EditUserComponent } from './componentes/perfil/edit-user.component';

import { canActivate } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},

  {path:'editarusuario/:id', component: EditUserComponent},

  {path:'nuevaedu', component: NewEduComponent},
  {path:'editaredu/:id', component: EditEduComponent},

  {path:'nuevaexp', component: NewExpComponent},
  {path:'editarexp/:id', component: EditExpComponent},

  {path:'nuevaskill', component: NewSkillComponent},
  {path:'editarskill/:id', component: EditSkillComponent},

  {path:'nuevasobremi', component: NewSobremiComponent},
  {path:'editarsobremi/:id', component: EditSobremiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
