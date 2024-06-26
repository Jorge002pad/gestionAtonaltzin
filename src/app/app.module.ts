import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ApartadoComponent } from './components/apartado/apartado.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { BookingComponent } from './components/booking/booking.component';
import { CobrosComponent } from './components/cobros/cobros.component';
import { CabanaComponent } from './components/cabana/cabana.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { RestablecerComponent } from './components/restablecer/restablecer.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ReservacionAdminComponent } from './components/reservacion-admin/reservacion-admin.component';
import { SellerComponent } from './componenets/seller/seller.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    ClienteComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    AdminComponent,
    ReservaComponent,
    ApartadoComponent,
    ReservacionComponent,
    BookingComponent,
    CobrosComponent,
    CabanaComponent,
    RecuperarComponent,
    RestablecerComponent,
    UsuarioComponent,
    ReservacionAdminComponent,
    SellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Agrega FormsModule aquí
    HttpClientModule,
    NgxPaginationModule, //paginacion
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
