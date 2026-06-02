import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home';
import {AboutComponent} from './Views/about/about';
import { ContactComponent } from "./Views/contact/contact";
import { StoreComponent } from './Views/store/store';

import { ErrorPageComponenet } from './Views/error-page/error-page';
import { OrderComponent } from './Views/order/order';
import { FormComponent } from './Shared/form/form';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},

    {path: 'menu', component: StoreComponent},
    {path: 'order', component: OrderComponent},
    {path: 'build', component: FormComponent},

    {path: '**', component: HomeComponent}
];
