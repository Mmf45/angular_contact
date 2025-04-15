// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ListeContactsComponent } from './components/listcontact/listcontact.component';
import { FormajoutComponent } from './components/formajout/formajout.component';
import { DetailContactComponent } from './components/detailcontact/detailcontact.component';

const routes: Routes = [
  { path: '', redirectTo: 'ajouter-contact', pathMatch: 'full' },
  { path: 'all', component:ContactsComponent },
  { path: 'list', component: ListeContactsComponent },
  { path: 'ajouter-contact', component: FormajoutComponent },
  { path: 'details', component: DetailContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
