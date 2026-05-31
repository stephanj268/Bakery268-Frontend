import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../Shared/navigation/navigation';
import { ProductService } from '../../Service/Product/product.service';



import { db_URL, PORT } from "../../../environment";
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
    this.productservice.get().subscribe( (data) => {
      console.log(data);
      this.pastries = data;
    })
  }



  
}
