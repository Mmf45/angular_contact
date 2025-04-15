// contact.model.ts

// Modifiez votre modèle de contact si nécessaire
export interface Contact {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  selected?: boolean; // Ajoutez cette ligne
}


export class ContactModel {
}
