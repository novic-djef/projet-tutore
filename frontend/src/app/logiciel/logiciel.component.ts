import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LogicielService } from '../service/logiciel.service';
import { Logiciel } from "../model/logiciel.model";
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logiciel',
  templateUrl: './logiciel.component.html',
  styleUrls: ['./logiciel.component.scss']
})
export class LogicielComponent implements OnInit{
  Logiciel: Logiciel[] = [];

  newLogiciel = new Logiciel();
  private headers=new Headers({'Content-Type':'application/json'});
  constructor(
    private httpClient:HttpClient,
    private logicielservice: LogicielService,
    public authservice:AuthService,
    private router:Router
    ) {

    logicielservice['getAllLogiciel']().subscribe(
      (  resp: Logiciel[])=>{
    this.Logiciel = resp ;
  },(err: any)=>{
    console.log("error");
  }
);
}
supprimerLogiciel(id:any) {
  let conf=confirm("etes vous sur?")
   if(conf)
  {
  this.logicielservice['deleteLogiciel'](id).subscribe(
    (    resp: any)=>{
      console.log(resp);
      location.reload();
    },(err: any)=>{
      console.log("error");

    }
  );}

}
ngOnInit(): void {
}
onSubmit(f: NgForm) {


  //this.logicielservice.addLogiciel(this.newLogiciel);

 window.alert("Le logiciel est ajouté !");
 this.router.navigate(['logiciel']);
 isAdded:true;


     }

}
