import { Component, OnInit } from '@angular/core';
import { TechnicienService } from '../service/technicien.service';
import { Technicien } from "../model/technicien.model";
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.scss']
})

  export class TechnicienComponent implements OnInit {
    Technicien: Technicien[] = [];
    newTechnicien = new Technicien();
    private headers=new Headers({'Content-Type':'application/json'});
    constructor(
      private technicienservice: TechnicienService,
      public authservice:AuthService,
      private router:Router
      ) {
      technicienservice['getAllUser']().subscribe(
        (    resp: Technicien[])=>{
      this.Technicien = resp ;
    },(err: any)=>{
      console.log("error");
    }

  );

  }

  confirmationString:String ="Nouveau utilisateur Ajouté..!!";  
  isAdded:boolean=false; 

  supprimerUser(id:any) {
    let conf=confirm("etes vous sur de vouloir supprimer..?")
     if(conf)
    {
    this.technicienservice['deleteTechnicien'](id).subscribe(
      (      resp: any)=>{
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
       
    //   console.log(this.newTechnicien);

   //this.technicienService.addTechnicien(this.newTechnicien);  
  // document.write("l admin est ajouté"); 
  
  window.alert("L'utilisateurs a ete ajouté !");
  this.router.navigate(['technicien']);
  isAdded:true;

      
      }

  }
