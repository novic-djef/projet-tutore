import { Component, OnInit } from '@angular/core';
import { Rapport } from "../model/rapport.model";
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RapportService } from '../service/rapport.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit {
 Rapport: Rapport[] = []; 
  newRapport= new Rapport();
  private headers=new Headers({'Content-Type':'application/json'});
  constructor(
    private rapportService: RapportService,
    public authservice:AuthService,
    private router:Router
    ) {
      rapportService.getAllRapport().subscribe(
        resp=>{
          this.Rapport = resp ;
        },err=>{
          console.log("error");
        }
      );

//     materielService['getAllMateriel']().subscribe(
//       (  resp: Materiel[])=>{
//     this.Materiel = resp ;
//   },(err: any)=>{
//     console.log("error");
//   }
// );
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
      console.log(this.newRapport);

  this.rapportService.addRapport(this. newRapport);

 window.alert("Le Rapport a ete ajouté avec succés !");
 this.router.navigate(['materiel']);
 isAdded:true;
 console.log("Votre rapport est: ", this.Rapport);


     }

}
