import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User} from '../../model/user.model'

import { AuthService } from '../../service/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  user = new User();
  erreur=0;
  a: boolean = false;
constructor(private authservice:AuthService,
  private router: Router) { }
ngOnInit(): void {
}
onSubmit(f: NgForm)
{this.a=this.authservice.signIn(this.user);
  if(this.a)
  {
    this.router.navigate(['/acceuil']);

  }
  else
  {
    console.log(this.erreur)
    //this.erreur = 1;

}


}}
