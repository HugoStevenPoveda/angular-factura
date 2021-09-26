import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Factura} from '../models/Factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
     
  //ATRIBUTOS
    API_URI:String='http://localhost:8080';
  
    //COSTRUCTOR
  constructor( private http:HttpClient) {}

  //METODS
  getAllFactura():Observable<Factura[]>{
    return this.http.get<Factura[]>(`${this.API_URI}/api/facturas`);
  }
  
  /*getByIdFactura(id:string):Observable<Factura>{
    return this.http.get<Factura>(`${this.API_URI}/facturas/${id}`)
  } }*/

  createFactura(factura:Factura):Observable<Factura>{
    
    return this.http.post<Factura>( `${this.API_URI}/api/facturas` , factura);


 





}
}