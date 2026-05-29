import { Component } from '@angular/core';
import { NavigationComponent } from "../../Shared/navigation/navigation";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [
    NavigationComponent, 
    RouterModule
  ],

  
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {}
