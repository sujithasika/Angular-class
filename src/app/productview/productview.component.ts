import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent {                                                          
  constructor( public api: ApiService){
    
  }

  ngOnInit(){
    this.displayProduct()
  }

  heading: string = "PRODUCT VIEW";
  productRes:any;
  
  


  displayProduct(){
   
    this.api.getProduct().subscribe((res:any)=>{
      console.log(res,"res")
      this.productRes = res;
      console.log(this.productRes,"this.productRes")
    })
  }
  edit(){

  }
  // id:any
  delete(id:any){
    // this.id = event.target.value;
    this.api.deleteproduct(id).subscribe((res:any)=>{
      this.displayProduct()   //
    })
    

  }
}
