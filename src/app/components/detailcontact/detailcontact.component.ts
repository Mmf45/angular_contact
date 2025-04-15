import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/servicecontact.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detailcontact.component.html',
  styleUrls: ['./detailcontact.component.css']
})
export class DetailContactComponent implements OnInit {
  @Input() contact: any; // Ajoute cette ligne pour déclarer la propriété contact comme entrée

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const contactId = params['id'];
      this.contactService.getContactById(contactId).subscribe(data => {
        this.contact = data;
      });
    });
  }
}
