import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket.model';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  Tickets:Array<Ticket>=[] ;
  ticket:any=new Ticket();

  constructor(private httpClient:HttpClient)  {

  this.httpClient.get("http://localhost:3001/tickets").subscribe(
    resp=>{
      //console.log(resp);
      this.Tickets = Object.values(resp);
      //console.warn(this.Tickets);
    }
  );
  // this.httpClient.get("http://localhost:3001/Tickets/logiciels").subscribe(
  //   resp=>{
  //     //console.log(resp);
  //     this.Tickets = Object.values(resp);
  //     //console.warn(this.Tickets);
  //   }
  // );
  }

getAllTicket():Observable<any>{
  //console.log(motCle);
  return this.httpClient.get("http://localhost:3001/tickets");

}
addTicket(newTicket:Ticket){
 //console.warn(JSON.stringify(newMateriel));
 const headers = { 'content-type': 'application/json'}  
 const body=JSON.stringify(newTicket);
 return  this.httpClient.post<any>('http://localhost:3001/ticket',body,{'headers':headers}).subscribe(data => {
  data.id;
  
});

}
deleteTicket(id:any):Observable<any>
{
  let url='http://localhost:3001/ticket/:id';
  let baseurl=url.concat(id.toString());
  return this.httpClient.delete(baseurl);
}

consulterTicket(id:number): Ticket{
  console.log(this.Tickets);
this.ticket=this.Tickets.find(p => p.id==id);
return this.ticket;
    }
updateTicket(m:Ticket)
{
  this.deleteTicket(m);
  this.addTicket(m);
}
// updateMateriel(id:any):Observable<any>
// {
//   let url='http://localhost:3001/material/:id';
//   let baseurl=url.concat(id.toString());
//   return this.httpClient.put<any>(url, 'http://localhost:3001/material/:id');
// }

}
