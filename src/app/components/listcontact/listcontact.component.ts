// listcontact.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/servicecontact.service';
import { ContactEventService } from '../../contact-event-service/contact-event-service.service';
@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListeContactsComponent implements OnInit, OnDestroy {
  private contactModifiedSubscription!: Subscription;
  contacts: any[] = [];
  selectedContact: any;
  showEditForm: boolean = false;
  selectedContactId: string = '';
  constructor(private contactService: ContactService, private contactEventService: ContactEventService) {}
  ngOnInit() {
    this.refreshContacts();
    this.contactModifiedSubscription = this.contactEventService.contactModified$.subscribe(() => {
      this.refreshContacts();
    });
  }
  ngOnDestroy() {
    this.contactModifiedSubscription.unsubscribe();
  }
  onSelectContact(contact: any): void {
    // Vérifie d'abord si le formulaire de modification n'est pas déjà affiché
    if (!this.showEditForm) {
      // Affiche le formulaire de modification
      this.showEditForm = true;
      this.selectedContactId = contact.id;

      // Chargez les détails du contact pour affichage dans le formulaire
      this.contactService.getContactById(contact.id).subscribe(data => {
        this.selectedContact = data;
      });
    }
  }
  ajouterContact(contact: any): void {
    this.contactService.ajouterContact(contact).subscribe(() => {
      this.refreshContacts();
      this.selectedContact = null;
      this.contactEventService.emitContactModified();
    });
  }
  supprimerContact(contactId: string): void {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer ce contact?');

    if (confirmation) {
      this.contactService.supprimerContact(contactId).subscribe(() => {
        this.refreshContacts();
        this.selectedContact = null;
        this.contactEventService.emitContactModified();
      });
    }
  }
  modifierContact(contact: any): void {
    this.showEditForm = true;
    this.selectedContactId = contact.id;

    this.contactService.getContactById(contact.id).subscribe(data => {
      this.selectedContact = data;
    });
  }
  modifierContactValide(): void {
    if (this.selectedContactId && this.selectedContact) {
      // Ajoutez des vérifications de nullabilité ici également
      if (this.selectedContact.nom && this.selectedContact.prenom && this.selectedContact.telephone && this.selectedContact.email) {
        this.contactService.modifierContact(this.selectedContactId, this.selectedContact).subscribe(() => {
          // Réinitialiser les valeurs
          this.selectedContactId = '';
          this.selectedContact = null;
          this.showEditForm = false;

          // Émettre l'événement de modification du contact
          this.contactEventService.emitContactModified();

          // Rafraîchir les contacts après modification
          this.refreshContacts();
        });
      }
    }
  }
  annulerModification(): void {
    this.showEditForm = false;
    this.selectedContactId = '';
    this.selectedContact = null;
  }
  private refreshContacts(): void {
    this.contactService.chargerContacts().subscribe((contacts: any[]) => {
      this.contacts = Array.isArray(contacts) ? contacts : [];
    });
  }
}
