import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'client', loadComponent: ()=>import('./pages/clients/clients.component').then(m=>m.ClientsComponent)},
    //{path: 'client', component:ClientsComponent},
    {path: 'dashboard', component:DashboardComponent}
];
