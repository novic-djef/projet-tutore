import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin.model';
import { AdminService } from '../service/admin.service';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  // Admins: Admin[] = [];
  user:any=new User();
  admin:any=new Admin();
  admins: Admin[] = [];
  newAdmin = new Admin();
  message: string | undefined;

    private headers=new Headers({'Content-Type':'application/json'});
    constructor(
      private httpClient:HttpClient,
      private adminService: AdminService,
      public authservice:AuthService,
      private router:Router) {

  adminService.getAllAdmin().subscribe(
    resp=>{

      this.admins= resp ;
    }
  );


  }
  confirmationString:String ="Nouvelle Administrateur ajouté";  
  isAdded:boolean=false;

  //  supprimerAdmin(id:any) {
  //    let conf=confirm("etes vous sur de vouloir supprimer?")
  //    if(conf)
  //   {this.adminService.deleteAdmin(id).subscribe(
  //     resp=>{
  //       console.log(resp);
  //       location.reload();
  //     },err=>{
  //       console.log("error");

  //     }
  //   );}

  // }
    ngOnInit(): void {

    }
    onSubmit(f: NgForm) {
        
      console.log(this.newAdmin);

  this.adminService.addAdmin(this.newAdmin);  
 // document.write("l admin est ajouté"); 
 
 window.alert("L'admin est ajouté !");
this.router.navigate(['admins']);
 isAdded:true;

     
     }
  }
