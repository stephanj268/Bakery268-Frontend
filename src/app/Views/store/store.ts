import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../Shared/navigation/navigation';
import { ProductService } from '../../Service/Product/product.service';



@Component({
  selector: 'app-store',
  imports: [NavigationComponent],
  templateUrl: './store.html',
  styleUrl: './store.scss',
})
export class StoreComponent implements OnInit{

  pastries: any;

  constructor(private productservice: ProductService) {

  }

  ngOnInit(): void {
    this.productservice.get().subscribe((data) => {
      this.pastries = data;
      console.log(this.pastries);
    })
  }

  filterProducts(product: string, event: any) {

  }

}
