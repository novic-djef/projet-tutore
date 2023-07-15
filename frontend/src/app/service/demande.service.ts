import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  [x: string]: any;
  addDemande(demande: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
