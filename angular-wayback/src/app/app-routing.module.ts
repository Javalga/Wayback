import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { CustomerInputComponent } from './pages/customer-input/customer-input.component'
import { HistoricalComponent } from './pages/historical/historical.component';
import { IncidentInputComponent } from './pages/incident-input/incident-input.component';
import { IncidentOutputComponent } from './pages/incident-output/incident-output.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { SolvedPullComponent } from './pages/solved-pull/solved-pull.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { WarehousesComponent } from './pages/warehouses/warehouses.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer-input', component: CustomerInputComponent },
  { path: 'historical', component: HistoricalComponent },
  { path: 'incident-input', component: IncidentInputComponent },
  { path: 'incident-output', component: IncidentOutputComponent },
  { path: 'returns', component: ReturnsComponent },
  { path: 'solved-pull', component: SolvedPullComponent },
  { path: 'user-admin', component: UserAdminComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'warehouses', component: WarehousesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
