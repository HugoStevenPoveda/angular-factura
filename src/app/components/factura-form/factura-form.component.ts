import { Component, HostBinding, OnInit, Optional } from '@angular/core';
import { Factura } from 'src/app/models/Factura';
import {FacturaService}from 'src/app/services/factura.service';

@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})
export class FacturaFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  factura:Factura={
    id_factura:0,
    id_cliente: 0,
    fecha:''

  };

  constructor(private facturaService:FacturaService) { 
    
  }

  ngOnInit(): void {
  }
  saveNewFactura(){

    
    this.facturaService.createFactura(this.factura)
    .subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.error(err);

      }
    )
  
  }

}
