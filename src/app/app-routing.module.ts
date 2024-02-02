import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductviewComponent } from './productview/productview.component';
const routes: Routes = [
  {path:"product1",component:ProductviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
