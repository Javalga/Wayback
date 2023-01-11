import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { CustomerInputComponent } from './pages/customer-input/customer-input.component'
import { HistoricalComponent } from './pages/historical/historical.component';
import { IncidenceInputComponent } from './pages/incidence-input/incidence-input.component';
import { IncidenceOutputComponent } from './pages/incidence-output/incidence-output.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { SolvedPullComponent } from './pages/solved-pull/solved-pull.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { WarehousesComponent } from './pages/warehouses/warehouses.component';
import { FormConfirmationComponent } from './pages/form-confirmation/form-confirmation.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer-input/:ref', component: CustomerInputComponent },
  { path: 'historical', component: HistoricalComponent },
  { path: 'incidence-input', component: IncidenceInputComponent },
  { path: 'incidence-output', component: IncidenceOutputComponent },
  { path: 'returns', component: ReturnsComponent },
  { path: 'solved-pull', component: SolvedPullComponent },
  { path: 'user-admin', component: UserAdminComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'warehouses', component: WarehousesComponent },
  { path: 'form-confirmation', component: FormConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
