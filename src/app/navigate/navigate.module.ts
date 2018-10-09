import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {HeadComponent} from '../head/head.component';
import { AboutComponent } from '../about/about.component';

const root :Route[]=[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(root)],
  exports:[RouterModule]
})
export class NavigateModule { }
