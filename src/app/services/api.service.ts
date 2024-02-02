import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient ) { }

  getProduct(){
   
    return this.http.get("http://localhost:3000/prod/get/product");
  }
  deleteproduct(id:any){
    return this.http.delete("http://localhost:3000/prod/delete/product/" + id);
  }
}
