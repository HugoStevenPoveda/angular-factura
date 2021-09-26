import { Component, OnInit } from '@angular/core';
import{FacturaService} from '../../services/factura.service';
//import{Factura} from '../../models/Factura'

@Component({
  selector: 'app-facturas-lis',
  templateUrl: './facturas-lis.component.html',
  styleUrls: ['./facturas-lis.component.css'],
  //providers:[FacturaService]
})

export class FacturasLisComponent implements OnInit {
   //facturas:Factura[]=[];
   
   facturas:any=[];
  constructor(private facturaService:FacturaService) {  }

  

  ngOnInit(): void {

    this.facturaService.getAllFactura().subscribe(
      res=>{
        this.facturas=res;
        console.log(this.facturas);
      },
      err =>console.error(err)
    );
  }

}
