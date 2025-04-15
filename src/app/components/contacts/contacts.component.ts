// contacts.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailContactComponent } from '../detailcontact/detailcontact.component';

export interface Contact {
  id?: number;
  prenom: string;
  nom: string;
  numero: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [
    { id: 1, prenom: 'Fatou', nom: 'Dia', numero: '123' },
    { id: 2, prenom: 'Abdou', nom: 'Dieng', numero: '456' },
    { id: 3, prenom: 'Pape', nom: 'Lo', numero: '789' },
    { id: 4, prenom: 'Demba', nom: 'Ba', numero: '012' }
  ];

  selectedContact: Contact | null = null;
  searchTerm: string = '';
  filteredContacts: Contact[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredContacts = this.contacts;
  }

  sortContacts(criteria: string) {
    this.filteredContacts.sort((a, b) => {
      if (criteria === 'nom') {
        return a.nom.localeCompare(b.nom);
      } else if (criteria === 'numero') {
        return a.numero.localeCompare(b.numero);
      }
      return 0;
    });
  }

  searchContacts() {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      contact.numero.includes(this.searchTerm)
    );
  }

  editContact(contact: Contact) {
    this.selectedContact = contact;
  }

  saveEditedContact() {
    // Implémentez ici la logique pour sauvegarder les détails du contact édité
    console.log("Saved edited contact:", this.selectedContact);
    this.selectedContact = null;
  }

  cancelEdit() {
    this.selectedContact = null;
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.filteredContacts = this.filteredContacts.filter(c => c !== contact);
  }
  addContact(contact: Contact) {
    console.log("Initially contacts:", this.contacts);
    console.log("Added contact:", contact.prenom, contact.nom, contact.numero);
    this.contacts.push(contact);
    this.filteredContacts = this.contacts; // Ajout pour s'assurer que filteredContacts est mis à jour
    console.log("Finally contacts:", this.contacts);
  }
  // Ajoutez une méthode pour gérer la sélection d'un contact
  showContactDetails(contact: Contact) {
    this.selectedContact = contact;
  }

// Ajoutez une méthode pour annuler la sélection du contact
  cancelContactDetails() {
    this.selectedContact = null;
  }
}
