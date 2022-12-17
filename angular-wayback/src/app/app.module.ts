import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IncidentInputComponent } from './pages/incident-input/incident-input.component';
import { IncidentOutputComponent } from './pages/incident-output/incident-output.component';
import { SolvedPullComponent } from './pages/solved-pull/solved-pull.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { HistoricalComponent } from './pages/historical/historical.component';
import { CustomerInputComponent } from './pages/customer-input/customer-input.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { DatesRangeComponent } from './components/dates-range/dates-range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsideLiComponent } from './components/aside-li/aside-li.component';
import { UserComponent } from './pages/user/user.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IncidentInputComponent,
    IncidentOutputComponent,
    SolvedPullComponent,
    UserAdminComponent,
    HistoricalComponent,
    CustomerInputComponent,
    ReturnsComponent,
    CardComponent,
    ButtonComponent,
    TableComponent,
    AsideComponent,
    HeaderComponent,
    DatesRangeComponent,
    AsideLiComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
