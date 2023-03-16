import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sobremi } from '../models/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  apiServerUrl= 'https://backendargprograma-cm1v.onrender.com';
  
  constructor(private http:HttpClient) { }

  public getSobremi():Observable<Sobremi[]>{
    return this.http.get<Sobremi[]>(`${this.apiServerUrl}/sobremi/all`);
  }

  public addSobremi(sobremi:Sobremi):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/sobremi/add`, sobremi);
  }
  
  public detailSobremi(id:number): Observable<Sobremi>{
    return this.http.get<Sobremi>(`${this.apiServerUrl}/sobremi/detail/${id}`)
  }

  public updateSobremi(id:number, sobremi:Sobremi):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/sobremi/update/${id}`, sobremi);
  }
  
  public deleteSobremi(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/sobremi/delete/${id}`);
  }
}
