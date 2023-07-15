import { Component, OnInit } from '@angular/core';
import { Materiel } from "../model/materiel.model";
import { MateriellService } from "../service/materiell.service";
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.scss']
})
export class MaterielComponent implements OnInit {
  Materiel: Materiel[] = [];
  newMateriel = new Materiel();
  private headers=new Headers({'Content-Type':'application/json'});
  constructor(
    private materielService: MateriellService,
    public authservice:AuthService,
    private router:Router
    ) {
      materielService.getAllMateriel().subscribe(
        resp=>{
          this.Materiel = resp ;
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
supprimerMateriel(id:any) {
  let conf=confirm("etes vous sur?")
   if(conf)
  {
  this.materielService['deleteMateriel'](id).subscribe(
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
      console.log(this.newMateriel);

  this.materielService.addMateriel(this. newMateriel);

 window.alert("Le matériel est ajouté !");
 this.router.navigate(['materiel']);
 isAdded:true;
 console.log("le materiel est: ", this.Materiel);


     }

}
