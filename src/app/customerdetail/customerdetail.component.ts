import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent {
  constructor(public api:ApiService){}
  customerForm:any;
  customerRes:any;
  
  ngOnInit(){
    this.customerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      address: new FormControl()
    })
  }

  submit(){
    // console.log(this.customerForm.value)
   
      this.api.submitcustomer(this.customerForm.value).subscribe((res:any)=>{
        console.log(res,"res")
        this.customerRes = res;
        console.log(this.customerRes,"this.customerRes")
      })
  }
}

    
  
  