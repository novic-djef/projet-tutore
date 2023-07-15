import { Component, OnInit } from '@angular/core';
import { TicketService } from '../service/ticket.service';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Ticket } from '../model/ticket.model';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.scss']
})
export class UpdateTicketComponent implements OnInit {
  [x: string]: any;
  currentTicket=new Ticket();
  file!: File;
  image: any;
    constructor(private ticketService:TicketService,private activatedrouter:ActivatedRoute,private router:Router) { }
  
    ngOnInit(): void {
      //console.log(this.activatedrouter.snapshot.params['id']);
      this.currentTicket=this.ticketService['consulterTicket'](this.activatedrouter.snapshot.params['id']);
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
      this.ticketService['updateTicket'](this.currentTicket);
      this.router.navigate(['materiel']);
  
    }
  
  }
  