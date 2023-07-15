import { Component, OnInit } from '@angular/core';
import { MateriellService } from '../service/materiell.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Materiel } from '../model/materiel.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update-materiel',
  templateUrl: './update-materiel.component.html',
  styleUrls: ['./update-materiel.component.scss']
})
export class UpdateMaterielComponent implements OnInit {
  currentMateriel=new Materiel();
  file!: File;
  image: any;
    constructor(private materielservice:MateriellService,private activatedrouter:ActivatedRoute,private router:Router) { }
  
    ngOnInit(): void {
      //console.log(this.activatedrouter.snapshot.params['id']);
      this.currentMateriel=this.materielservice['consulterMateriel'](this.activatedrouter.snapshot.params['id']);
     // console.log(this.currentMateriel);
    }
    onchange(event: any) {
      let reader = new FileReader();
      this.file = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.image = reader.result;
      };
  
    }
    onSubmit(f:NgForm)
    {
      this.materielservice['updateMateriel'](this.currentMateriel);
      this.router.navigate(['materiel']);
  
    }
  
  }
  