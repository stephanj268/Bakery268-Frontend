import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home';
import {AboutComponent} from './Views/about/about';
import { ContactComponent } from "./Views/contact/contact";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];
