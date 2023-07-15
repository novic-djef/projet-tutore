import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../model/admin.model';
import { Technicien } from '../model/technicien.model';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admins:Admin[] = [];
techniciens:Technicien[] = [];
  verif: Boolean = false;
public loggedUser:any;
public isloggedIn: boolean = false;
public role:string="";

constructor(private httpclient:HttpClient,private router:Router) { 
    this.httpclient.get("http://localhost:3001/users").subscribe(
resp=>{
  this.admins=Object.values(resp);
  console.log(this.admins);
  //console.warn(this.admins);

}
    );
    this.httpclient.get("http://localhost:3001/techniciens").subscribe(
      respp=>{
        this.techniciens=Object.values(respp);
        console.log(this.techniciens);
      }
    )
  }
  signIn(user:User):boolean
  {
    let valideuser:boolean=false;
    this.admins.forEach((curAdmin=>{
if((user.password===curAdmin.password && user.username===curAdmin.username))
{
valideuser=true;
this.role="user";
this.loggedUser=user.username;
this.isloggedIn=true;
localStorage.setItem('loggedUser',this.loggedUser);
localStorage.setItem('isloggedIn',String(this.isloggedIn));
localStorage.setItem('role',this.role);

}
}));
if(valideuser==false)
{
  this.techniciens.forEach((curTechnicien=>{
    if((user.password==curTechnicien.password && user.username==curTechnicien.username))
    {
      this.role="technicien";
      valideuser=true;
      this.loggedUser=user.username;
      this.isloggedIn=true;
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      localStorage.setItem('role',this.role);

    }
  }
  ));
}

    
    return valideuser;
    
  }
  isAdmin():Boolean
  {
    let value: any = localStorage.getItem('role');

    if(value=="admin")
    {
      this.verif=true;
    }
    else
    {
      this.verif=false;
    }
    return this.verif;
  }
  isTechnicien():Boolean
  {
    let value: any = localStorage.getItem('role');

    if(value=="technicien")
    {
      this.verif=true;
    }
    else
    {
      this.verif=false;
    }
    return this.verif;
  }

 
    

  }
