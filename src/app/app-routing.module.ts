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

// Archivo de rutas encargado de determinar el manejo de las redirecciones de las páginas
const routes: Routes = [
  // Componente menu el cual va a tener como hijos home,productos,quienes-somos,carrito,contactanos y adminProd
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
  // Login el cual es el primero en renderizase
  {path: 'login', component: LoginComponent },
  //Pagos el cual se debe renderizar fuera del menu
  {path: 'pagos', component: PagosComponent },
  //Todas las rutas erroneas o rutas vacias redirigen al login
  { path: '**', pathMatch: 'full',redirectTo: 'login' },

  // Mejora pendiente agregar el canActivate con el objetivo de mejorar la seguridad y evitar el ingreso por rutas saltandose el login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
