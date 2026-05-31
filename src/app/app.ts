import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./Shared/footer/footer";
import { ProductService } from './Service/Product/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [ProductService]
})
export class App {
  protected readonly title = signal('Backery268-Frontend');
}
