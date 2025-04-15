// servicecontact.service.ts
import {Observable, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/contacts';
  private contactModifiedSource = new Subject<void>();
  contactModified$ = this.contactModifiedSource.asObservable();
  constructor(private http: HttpClient) {}
  ajouterContact(contact: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contact);
  }
  chargerContacts(colonneTri?: string, ordreTri?: string, termeRecherche?: string): Observable<any[]> {
    let params = new HttpParams();
    if (colonneTri && ordreTri) {
      params = params.append('sort', `${colonneTri},${ordreTri}`);
    }
    if (termeRecherche) {
      params = params.append('search', termeRecherche);
    }
    return this.http.get<any[]>(this.apiUrl, { params });
  }
  getContactById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  supprimerContact(contactId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${contactId}`);
  }

  modifierContact(id: string, contact: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, contact);
  }

  emitContactModified(): void {
    this.contactModifiedSource.next();
  }
}
