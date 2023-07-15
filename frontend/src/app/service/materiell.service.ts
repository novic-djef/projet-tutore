// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MateriellService {
//   [x: string]: any;
//   addMateriel: any;

//   constructor() { }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiel } from '../model/materiel.model'

@Injectable({
  providedIn: 'root'
})
export class MateriellService {

Materiels:Array<Materiel>=[] ;
materiel:any=new Materiel();

  constructor(private httpClient:HttpClient)  {

    this.httpClient.get("http://localhost:3001/materials").subscribe(
      resp=>{
        //console.log(resp);
        this.Materiels = Object.values(resp);
        //console.warn(this.Materiels);
      }
    );
   }

  getAllMateriel():Observable<any>{
    //console.log(motCle);
    return this.httpClient.get("http://localhost:3001/materials");

  }
 addMateriel(newMateriel:Materiel){
   //console.warn(JSON.stringify(newMateriel));
   const headers = { 'content-type': 'application/json'}  
   const body=JSON.stringify(newMateriel);
   return  this.httpClient.post<any>('http://localhost:3001/material',body,{'headers':headers}).subscribe(data => {
    data.id;
    
});
 }
 deleteMateriel(id:any):Observable<any>
  {
    let url='http://localhost:3001/material/:id';
    let baseurl=url.concat(id.toString());
    return this.httpClient.delete(baseurl);
  }
 
  consulterMateriel(id:number): Materiel{
    console.log(this.Materiels);
 this.materiel=this.Materiels.find(p => p.id==id);
 return this.materiel;
      }
  updateMateriel(m:Materiel)
  {
    this.deleteMateriel(m);
    this.addMateriel(m);
  }
  // updateMateriel(id:any):Observable<any>
  // {
  //   let url='http://localhost:3001/material/:id';
  //   let baseurl=url.concat(id.toString());
  //   return this.httpClient.put<any>(url, 'http://localhost:3001/material/:id');
  // }
 
}
