import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../service/demande.service';
import { ActivatedRoute } from '@angular/router';
import { demande } from '../model/demande.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-demande',
  templateUrl: './update-demande.component.html',
  styleUrls: ['./update-demande.component.scss']
})
export class UpdateDemandeComponent implements OnInit {
  currentDemande:any=new demande();
    constructor(private demandeservice :DemandeService, private activatedroute:ActivatedRoute,private router:Router) { }
  
    ngOnInit(): void {
  
      this.currentDemande=this.demandeservice['consulterDemande'](this.activatedroute.snapshot.params['id']);
    //  console.log(this.currentDemande);
    }
    onSubmit(f: NgForm)
  {
    this.demandeservice['update'](this.currentDemande);
    window.alert("L'état de la demande est modifié avec succés !");
  
    this.router.navigate(['demandes']);
  }
  }