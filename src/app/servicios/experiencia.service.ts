import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  apiServerUrl= 'https://backendargprograma-cm1v.onrender.com';

  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/all`);
  }

  public addExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/experiencia/add`, experiencia);
  }
  
  public detailExperiencia(id:number): Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.apiServerUrl}/experiencia/detail/${id}`)
  }

  public updateExperiencia(id:number, experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/experiencia/update/${id}`, experiencia);
  }

  public deleteExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/experiencia/delete/${id}`);
  }

}
