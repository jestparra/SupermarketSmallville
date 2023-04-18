import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { AdminProductosComponent } from './componentes/admin-productos/admin-productos.component';
import { HomeComponent } from './componentes/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { CarritoComprasComponent } from './componentes/carrito-compras/carrito-compras.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { PagosComponent } from './componentes/pagos/pagos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ProductosComponent,
    AdminProductosComponent,
    HomeComponent,
    QuienesSomosComponent,
    CarritoComprasComponent,
    ContactanosComponent,
    PagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
