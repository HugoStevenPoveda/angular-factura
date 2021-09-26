import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from '../app/components/nav/nav.component'

import { FacturaFormComponent } from './components/factura-form/factura-form.component';
import { FacturasLisComponent } from './components/facturas-lis/facturas-lis.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PlatillaFormComponent } from './components/platilla-form/platilla-form.component';
//import {FacturaService} from './services/factura.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FacturaFormComponent,
    FacturasLisComponent,
    ProductoComponent,
    ClienteComponent,
    DetalleComponent,
    PlatillaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [

    //FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
