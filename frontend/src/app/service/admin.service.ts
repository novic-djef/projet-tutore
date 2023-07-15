import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Admin } from '../model/admin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admins:Array<Admin> = [];
  admin:any=new Admin();
    constructor(private httpClient:HttpClient) {

      this.httpClient.get("http://localhost:3001/administrators").subscribe(
        resp=>{
          console.log(resp);
          this.admins = Object.values(resp);
          console.warn(this.admins);
        }
      );
     }


    getAllAdmin():Observable<any>{
      return this.httpClient.get("http://localhost:3001/administrators");

    }
   addAdmin(newAdmin:Admin){
     //console.warn(JSON.stringify(newAdmin));
     const headers = { 'content-type': 'application/json'}
     const body=JSON.stringify(newAdmin);
     return  this.httpClient.post<any>('http://localhost:3001/administrator/login',body,{'headers':headers}).subscribe(data => {
      data.id;

  });

    }
    consulterAdmin(id:number): Admin{
     // console.log(this.admins);
    this.admin=this.admins.find(p => p.id== id);
    return this.admin;
        }

    // deleteAdmin(id:any):Observable<any>
    // {
    //   let url='http://localhost:8092/nodejs/api/supprim-admin/';
    //   let baseurl=url.concat(id.toString());
    //   return this.httpClient.delete(baseurl);
    // }

  updateAdmin(a:Admin)
  {
  // console.log(p);
  //this.deleteAdmin(a);
  this.addAdmin(a);
  }






  }
