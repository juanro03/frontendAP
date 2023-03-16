import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ProgressBarModule} from 'angular-progress-bar';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { NewEduComponent } from './componentes/educacion/new-edu.component';
import { EditEduComponent } from './componentes/educacion/edit-edu.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExpComponent } from './componentes/experiencia/new-exp.component';
import { EditExpComponent } from './componentes/experiencia/edit-exp.component';
import { NewSkillComponent } from './componentes/skill/new-skill.component';
import { EditSkillComponent } from './componentes/skill/edit-skill.component';
import { EditSobremiComponent } from './componentes/sobremi/edit-sobremi.component';
import { NewSobremiComponent } from './componentes/sobremi/new-sobremi.component';
import { EditUserComponent } from './componentes/perfil/edit-user.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    SobremiComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillComponent,
    NewEduComponent,
    EditEduComponent,
    HomeComponent,
    LoginComponent,
    NewExpComponent,
    EditExpComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditSobremiComponent,
    NewSobremiComponent,
    EditUserComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProgressBarModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
