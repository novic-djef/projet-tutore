import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { intervention } from '../model/intervention.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  interventions:Array<intervention> = [];
  inter:any=new intervention();
  constructor(private httpClient:HttpClient) {
    this.httpClient.get("http://localhost:3001/interventions").subscribe(
      res=>{
this.interventions=Object.values(res);
      }
    )
   }
   getAllIntervention():Observable<any> {
    return this.httpClient.get("http://localhost:3001/interventions");
   }
  
   addIntervention(newIntervention:intervention)
   {
    //console.warn(JSON.stringify(newIntervention));
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newIntervention);  
 
    this.httpClient.post<any>("http://localhost:3001/intervention",body,{'headers':headers}).subscribe(data=>{
      data.id;
    }) 
  }

  
  supprimIntervention(id:any)
  {
    let url="http://localhost:3001/interventions/:id";
    let baseUrl=url.concat(id.toString());
    return this.httpClient.delete(baseUrl);
  }
  consulterIntervention(id:number):intervention
  {
this.inter=this.interventions.find(p=>p.id==id);
return this.inter;
  }
  updateIntervention(inter:intervention)
  {
    this.supprimIntervention(inter);
    this.addIntervention(inter);
  }
  
}
