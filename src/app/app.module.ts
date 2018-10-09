import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NavigateModule } from './navigate/navigate.module';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeadComponent,
    ContactComponent,
    AboutComponent,
   
    
  ],
  imports: [
    BrowserModule,FormsModule, NavigateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
