import { Injectable } from '@angular/core';
import { Conclass } from './conclass';
import { ConmockDB } from './conmock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConserviceService {

  constructor() { }

  getDB():Observable <Conclass[]> {
    return of(ConmockDB) ;
  }

}
