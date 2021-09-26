import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{FacturasLisComponent}from '../app/components/facturas-lis/facturas-lis.component'

import{PlatillaFormComponent} from 'src/app/components/platilla-form/platilla-form.component'


const routes: Routes = [
  {
      path :'api/',
      redirectTo:'api/facturas',
      //component:FacturasLisComponent
      pathMatch:'full'  
  },
  {
    path:'api/facturas',
    component:FacturasLisComponent
  },
  {
      path:'api/facturas/add',
      component:PlatillaFormComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
