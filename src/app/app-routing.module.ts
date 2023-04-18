import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { CarritoComprasComponent } from './componentes/carrito-compras/carrito-compras.component';
import { LoginComponent } from './componentes/login/login.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { AdminProductosComponent } from './componentes/admin-productos/admin-productos.component';
import { PagosComponent } from './componentes/pagos/pagos.component';

const routes: Routes = [
  {
    path:'menu',
    component: MenuComponent,
    children:[
      {path: 'home', component: HomeComponent },
      {path: 'productos', component: ProductosComponent },
      {path: 'quienes-somos', component: QuienesSomosComponent },
      {path: 'carrito', component: CarritoComprasComponent },
      {path: 'contactanos', component: ContactanosComponent },
      {path: 'adminProd', component: AdminProductosComponent },
    ]
  },
  {path: 'login', component: LoginComponent },
  {path: 'pagos', component: PagosComponent },
  { path: '**', pathMatch: 'full',redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
