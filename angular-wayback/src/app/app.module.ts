import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IncidenceInputComponent } from './pages/incidence-input/incidence-input.component';
import { IncidenceOutputComponent } from './pages/incidence-output/incidence-output.component';
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
import { LocationsComponent } from './pages/locations/locations.component';
import { WarehousesComponent } from './pages/warehouses/warehouses.component'
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './components/filter/filter.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { FormConfirmationComponent } from './pages/form-confirmation/form-confirmation.component';
import { FormNotAvailableComponent } from './pages/form-not-available/form-not-available.component';
import { FormIncidenceNotFoundComponent } from './pages/form-incidence-not-found/form-incidence-not-found.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IncidenceInputComponent,
    IncidenceOutputComponent,
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
    LocationsComponent,
    WarehousesComponent,
    FilterComponent,
    PdfComponent,
    FormConfirmationComponent,
    FormNotAvailableComponent,
    FormIncidenceNotFoundComponent,
    PieChartComponent,
    FormConfirmationComponent,
    BarChartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
