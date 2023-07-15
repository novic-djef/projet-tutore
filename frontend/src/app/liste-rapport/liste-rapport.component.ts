import { Component, OnInit } from '@angular/core';
import { Rapport } from "../model/rapport.model";
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RapportService } from '../service/rapport.service';

@Component({
  selector: 'app-liste-rapport',
  templateUrl: './liste-rapport.component.html',
  styleUrls: ['./liste-rapport.component.scss']
})
export class ListeRapportComponent implements OnInit {

  Rapport: Rapport[] = []; 

  private headers=new Headers({'Content-Type':'application/json'});
  constructor(
    private rapportService: RapportService,
    public authservice:AuthService,
    private router:Router
    ) {
      // rapportService.getAllRapport().subscribe(
      //   resp=>{
      //     this.Rapport = resp ;
      //   },err=>{
      //     console.log("error");
      //   }
      // );

    rapportService['getAllRapport']().subscribe(
      (  resp: Rapport[])=>{
    this.Rapport = resp ;
  },(err: any)=>{
    console.log("error");
  }
);
}
supprimerRapport(id:any) {
  let conf=confirm("etes vous sur?")
   if(conf)
  {
  this.rapportService['deleteRapport'](id).subscribe(
    (    resp: any)=>{
      console.log(resp);
      location.reload();
    },(err: any)=>{
      console.log("error");

    }
  );}

}
isAdded:boolean=false;
ngOnInit(): void {

}



    onSubmit(f: NgForm) {

     }

}
