import { Component, OnInit } from '@angular/core';
import {Aboutc} from '../aboutc';
import {Updatemock} from '../updatemock'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public select:Aboutc;
  constructor() { }

  ngOnInit() {
    // this.select = Updatemock[0];
  }
  lists:Aboutc[]=Updatemock;

  selectedList(listParameter){
this.select = listParameter;
  }
}
