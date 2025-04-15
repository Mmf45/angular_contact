// app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AjoutcontactComponent } from './components/ajoutcontact/ajoutcontact.component';
import { ListeContactsComponent } from './components/listcontact/listcontact.component';
import { DetailContactComponent } from './components/detailcontact/detailcontact.component';
import { FormajoutComponent } from './components/formajout/formajout.component';
import { ContactService } from "./services/servicecontact.service";
import {ContactEventService} from "src/app/contact-event-service/contact-event-service.service";

const routes: Routes = [
  { path: '', redirectTo: 'ajouter-contact', pathMatch: 'full' },
  { path: 'all', component: ContactsComponent },
  { path: 'list', component: ListeContactsComponent },
  { path: 'ajouter-contact', component: FormajoutComponent },
  { path: 'details', component: DetailContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListeContactsComponent,
    FormajoutComponent,
    ContactsComponent,
    AjoutcontactComponent,
    DetailContactComponent,
    FormajoutComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule // Ajoutez HttpClientModule ici
  ],
  exports: [RouterModule],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
