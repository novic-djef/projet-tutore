import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from '../model/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TechnicienService {
  [x: string]: any;
  users:Array<User> = [];
  user:any=new User();
  constructor(private httpClient:HttpClient) { 
  
  this.httpClient.get("http://localhost:3001/users").subscribe(
    resp=>{
      console.log(resp);
      this.users = Object.values(resp);
      console.warn(this.users);
    }
  );
 }


getAllUser():Observable<any>{
  return this.httpClient.get("http://localhost:3001/users");

}
addUser(newUser:User){
 //console.warn(JSON.stringify(newAdmin));
 const headers = { 'content-type': 'application/json'}
 const body=JSON.stringify(newUser);
 return  this.httpClient.post<any>('http://localhost:3001/user',body,{'headers':headers}).subscribe(data => {
  data.id;

});

}
consulterUser(id:number): User{
 // console.log(this.admins);
this.user=this.users.find(p => p.id== id);
return this.user;
    }

// deleteAdmin(id:any):Observable<any>
// {
//   let url='http://localhost:8092/nodejs/api/supprim-admin/';
//   let baseurl=url.concat(id.toString());
//   return this.httpClient.delete(baseurl);
// }

updateUser(a:User)
{
// console.log(p);
//this.deleteAdmin(a);
this.addUser(a);
}






}


