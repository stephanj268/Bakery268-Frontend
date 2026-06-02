import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation';
import { ProductService } from '../../Service/Product/product.service';

@Component({
  selector: 'app-form',
  imports: [NavigationComponent],
  standalone: true,
  templateUrl: './form.html',
  styleUrl: './form.scss',
})

export class FormComponent implements OnInit{
  product: any;

  constructor(private productservice: ProductService) {

  }

  ngOnInit(): void {
    this.productservice.get().subscribe((data) => {
      this.product = data
      console.log(this.product)
      
    })
    
  }
}
