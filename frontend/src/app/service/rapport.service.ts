import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rapport } from '../model/rapport.model'

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  Rapports:Array<Rapport>=[] ;
  rapport:any=new Rapport();
  
    constructor(private httpClient:HttpClient)  {
  
      this.httpClient.get("http://localhost:3001/rapports").subscribe(
        resp=>{
          //console.log(resp);
          this.Rapports = Object.values(resp);
          //console.warn(this.Rapports);
        }
      );
      // this.httpClient.get("http://localhost:3001/rapports/logiciels").subscribe(
      //   resp=>{
      //     //console.log(resp);
      //     this.Rapports = Object.values(resp);
      //     //console.warn(this.Rapports);
      //   }
      // );
     }
  
    getAllRapport():Observable<any>{
      //console.log(motCle);
      return this.httpClient.get("http://localhost:3001/rapportS");
  
    }
    addRapport(newMateriel:Rapport){
     //console.warn(JSON.stringify(newMateriel));
     const headers = { 'content-type': 'application/json'}  
     const body=JSON.stringify(newMateriel);
     return  this.httpClient.post<any>('http://localhost:3001/rapports',body,{'headers':headers}).subscribe(data => {
      data.id;
      
  });
  
   }
   deleteRapport(id:any):Observable<any>
    {
      let url='http://localhost:3001/rapports/:id';
      let baseurl=url.concat(id.toString());
      return this.httpClient.delete(baseurl);
    }
   
    consulterMateriel(id:number): Rapport{
      console.log(this.Rapports);
   this.rapport=this.Rapports.find(p => p.id==id);
   return this.rapport;
        }
    updateMateriel(m:Rapport)
    {
      this.deleteRapport(m);
      this.addRapport(m);
    }
    // updateMateriel(id:any):Observable<any>
    // {
    //   let url='http://localhost:3001/material/:id';
    //   let baseurl=url.concat(id.toString());
    //   return this.httpClient.put<any>(url, 'http://localhost:3001/material/:id');
    // }
   
  }
  