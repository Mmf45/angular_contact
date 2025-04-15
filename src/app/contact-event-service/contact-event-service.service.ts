import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactEventService {
  private contactModifiedSource = new Subject<void>();

  contactModified$ = this.contactModifiedSource.asObservable();

  emitContactModified(): void {
    this.contactModifiedSource.next();
}
  constructor() { }
}
