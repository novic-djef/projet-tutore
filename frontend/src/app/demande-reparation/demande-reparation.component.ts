import { Component } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { NgForm } from '@angular/forms';
import { demande } from '../model/demande.model';

@Component({
  selector: 'app-demande-reparation',
  templateUrl: './demande-reparation.component.html',
  styleUrls: ['./demande-reparation.component.scss']
})
export class DemandeReparationComponent {
  demande:any=new demande();
  constructor(
    //private demandeService:DemandeService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm)
  {
    //this.demandeService.addDemande(this.demande);
    this.router.navigate(['succes']);

  }
}
