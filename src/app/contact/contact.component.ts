import { Component, OnInit } from '@angular/core';
import { Conclass } from '../conclass';
// import {ConmockDB} from '../conmock';
import { ConserviceService } from '../conservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  empl: Conclass[];
  constructor(private conParameter: ConserviceService) { }

  ngOnInit() {
    this.getService();
  }
  // empl = ConmockDB;

  getService() {
    this.conParameter.getDB()
    .subscribe(subcribeParameter => this.empl = subcribeParameter)
  }
}





