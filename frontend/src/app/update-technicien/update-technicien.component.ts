import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Technicien } from '../model/technicien.model';
import { TechnicienService } from '../service/technicien.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-technicien',
  templateUrl: './update-technicien.component.html',
  styleUrls: ['./update-technicien.component.css']
})
export class UpdateTechnicienComponent implements OnInit {
  currenttechnicien=new Technicien();

  constructor(private technicienservice:TechnicienService,private activatedroute:ActivatedRoute,private router:Router) { }
private headers=new Headers({'Content-Type':'application/json'});

  ngOnInit(): void {
   // console.log(this.activatedroute.snapshot.params['id']);
    //this.currenttechnicien=this.technicienservice.consulterTechnicien(this.activatedroute.snapshot.params['id']);
   // console.log(this.currenttechnicien);
  }
  onSubmit(f: NgForm)
{
  // this.technicienservice.updateTechnicien(this.currenttechnicien);
  // window.alert("Le technicien est modifié avec succés !");
  //  this.router.navigate(['technicien']);
  
}


}
