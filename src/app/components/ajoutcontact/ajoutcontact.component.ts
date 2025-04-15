// ajoutcontact.component.ts

import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from "@angular/forms";

export interface Contact {
  nom: string;
  prenom: string;
  numero: string;
  adresse: string;
  id?: number;
}

@Component({
  selector: 'app-ajoutcontact',
  templateUrl: './ajoutcontact.component.html',
  styleUrls: ['./ajoutcontact.component.css']
})
export class AjoutcontactComponent {
  @Output() contactToAdd: EventEmitter<Contact> = new EventEmitter<Contact>();

  handleAdd(myform: NgForm) {
    if (myform.valid) {
      const newContact: Contact = {
        nom: myform.value.nom,
        prenom: myform.value.prenom,
        numero: myform.value.numero,
        adresse: myform.value.adresse
      };

      this.contactToAdd.emit(newContact);
      myform.resetForm();
    }
  }
}
