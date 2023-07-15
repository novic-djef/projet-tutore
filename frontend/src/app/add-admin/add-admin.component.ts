import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';import { NgForm } from '@angular/forms';
import { Admin } from '../model/admin.model';
import { AdminService } from '../service/admin.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit{
  newAdmin = new Admin();
  message: string | undefined;
   constructor(private httpClient:HttpClient,private adminService: AdminService,private router:Router) { }
   confirmationString:String ="Un nouvelle Administrateur a ete ajouté ";
 isAdded:boolean=false;
   ngOnInit(): void {
   }

       onSubmit(f: NgForm) {

         console.log(this.newAdmin);

     this.adminService.addAdmin(this.newAdmin);
    // document.write("l admin est ajouté");

    window.alert("L admin est ajouté !");
 this.router.navigate(['admins']);
    isAdded:true;


        }

 }
