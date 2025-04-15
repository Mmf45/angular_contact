// formajout.component.ts
import { Component, Input } from '@angular/core';
import { ContactService } from '../../services/servicecontact.service';
import { ContactEventService } from '../../contact-event-service/contact-event-service.service';
@Component({
  selector: 'app-formajout',
  templateUrl: './formajout.component.html',
  styleUrls: ['./formajout.component.css']
})
export class FormajoutComponent {
  @Input() selectedContact: any;

  nouveauContact = {
    nom: '',
    prenom: '',
    telephone: '',
    email: ''
  };
  constructor(private contactService: ContactService, private contactEventService: ContactEventService) {}
  ajouterContact(): void {
    this.contactService.ajouterContact({
      nom: this.nouveauContact.nom,
      prenom: this.nouveauContact.prenom,
      telephone: this.nouveauContact.telephone,
      email: this.nouveauContact.email
    }).subscribe(() => {
      this.nouveauContact = {
        nom: '',
        prenom: '',
        telephone: '',
        email: ''
      };
      this.contactEventService.emitContactModified();
    });
  }
  modifierContact(): void {
    if (this.selectedContact) {
      this.contactService.modifierContact(this.selectedContact.id, this.selectedContact).subscribe(() => {
        this.selectedContact = null;
        this.contactEventService.emitContactModified();
      });
    }
  }
}
