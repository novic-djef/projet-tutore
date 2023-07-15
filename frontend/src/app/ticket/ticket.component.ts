import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';import { NgForm } from '@angular/forms';
import { TicketService } from '../service/ticket.service';
import { Router } from '@angular/router';
import { Ticket } from '../model/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  newTicket = new Ticket();
  ticket: Ticket[] = [];
  
   constructor(private httpClient:HttpClient,private ticketService: TicketService,private router:Router) {
    ticketService.getAllTicket().subscribe(
      resp=>{
        this.ticket = resp ;
      },err=>{
        console.log("error");
      }
    );
    }
   confirmationString:String ="Un Nouveau Ticket a ete ajouté ";
 isAdded:boolean=false;
 

  ngOnInit(): void {
    console.log(this.newTicket);

    this.ticketService.addTicket(this.newTicket);
  
  }
  supprimer(id:any) {
    let conf=confirm("etes vous sur?")
     if(conf)
    {
    this.ticketService['deleteTicket'](id).subscribe(
      (    resp: any)=>{
        console.log(resp);
        location.reload();
      },(err: any)=>{
        console.log("error");
  
      }
    );}
  
  }

}
