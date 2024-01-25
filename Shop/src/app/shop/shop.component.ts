import { Component, OnInit } from '@angular/core';
import { FakestorService } from '../servieces/fakestor.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  protected products: any;

  constructor(private fakestorService: FakestorService) { }

    async ngOnInit() {
      this.products = await this.fakestorService.getProducts().toPromise();
      console.log(this.products);
    }


}
