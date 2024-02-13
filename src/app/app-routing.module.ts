import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductviewComponent } from './productview/productview.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
const routes: Routes = [
  {path:"product1",component:ProductviewComponent},
  {path:"customer",component:CustomerdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
