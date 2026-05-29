import { Routes } from '@angular/router';
import { FormComponent } from './Shared/form/form';
import { App } from './app';

export const routes: Routes = [
    {path: '', component: App},
    { path: 'form', component: FormComponent },
];
