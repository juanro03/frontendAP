import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  apiServerUrl= 'https://backendargprograma-cm1v.onrender.com';
  
  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/all`);
  }

  public addEducacion(educacion:Educacion):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/educacion/add`, educacion);
  }
  
  public detailEducacion(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(`${this.apiServerUrl}/educacion/detail/${id}`)
  }

  public updateEducacion(id:number, educacion:Educacion):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/educacion/update/${id}`, educacion);
  }

  public deleteEducacion(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/educacion/delete/${id}`);
  }
  
}


