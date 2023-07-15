import { Component, OnInit } from '@angular/core';
// import { reparation } from '../model/reparation.model';
// import { reparationService } from '../service/reparation.service';
// import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export class ReparationComponent {
  // reparation: reparation[] = [];
  // constructor(private reparationService:reparationService,public authservice:AuthService) {
  //   this.reparationService['getAllreparation']().subscribe(
  //     (      resp: reparation[])=>{
  //       this.reparation=resp;
  //     }
  //   )
  // }
  // user:any=localStorage.getItem('loggedUser');
 constructor(private router : Router){}
  ngOnInit(): void {

  }
  // supprimerreparation(id:number)
  // {
  //   let conf=confirm("etes vous sur de vouloir supprimé?")
  //   if(conf)
  //  {this.reparationService['supprimreparation'](id).subscribe(
  //    (     resp: any)=>{
  //      console.log(resp);
  //      location.reload();
  //    },(err: any)=>{
  //      console.log("error");

  //    }
  //  );}
  //   }
  onSubmit() {


    //this.logicielservice.addLogiciel(this.newLogiciel);
  
   window.alert("Le logiciel est ajouté !");
   this.router.navigate(['logiciel']);
   isAdded:true;
  
  
       }

}
