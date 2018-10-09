import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public pass: string;

  constructor() { }

  ngOnInit() {
  }

  data:any={};

   submitClick() {

    // console.log(this.data);
    if (this.data.email === "abcd" && this.data.pass === "abcd")
      // alert('success');
      window.location.href="/home";
    else
      alert('try again');
  }



}
