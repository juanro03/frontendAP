import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  apiServerUrl= 'https://backendargprograma-cm1v.onrender.com';

  constructor(private http:HttpClient) { }

  public getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.apiServerUrl}/skill/all`);
  }

  public addSkill(skill:Skill):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/skill/add`, skill);
  }
  
  public detailSkill(id:number): Observable<Skill>{
    return this.http.get<Skill>(`${this.apiServerUrl}/skill/detail/${id}`)
  }

  public updateSkill(id:number, skill:Skill):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/skill/update/${id}`, skill);
  }

  public deleteSkill(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/skill/delete/${id}`);
  }
}
