import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BlogComponent} from "./blog/blog.component";
import {ContactComponent} from "./contact/contact.component";
import {ShopComponent} from "./shop/shop.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog',  component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
