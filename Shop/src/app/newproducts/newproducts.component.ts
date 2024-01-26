import { Component } from '@angular/core';
import { FakestorService } from '../servieces/fakestor.service';

@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.scss']
})
export class NewproductsComponent {

  protected products: any;

  constructor(private fakestorService: FakestorService) { }

    async ngOnInit() {
      this.products = await this.fakestorService.getFiveProducts().toPromise();
      console.log(this.products);
    }

  addToCart(product: any) {

  }
}
