
import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
export interface DropdownItem {
  label: string;
  description: string;
  route: string;
  icon: string;
}
 
export interface NavLink {
  label: string;
  route: string;
  dropdown?: DropdownItem[];
}
 
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class NavigationComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  activeDropdown = signal<string | null>(null);
 
  navLinks: NavLink[] = [
    { label: 'Home', route: '/' },
    {
      label: 'Menu',
      route: '/menu',
      dropdown: [
        { label: 'Banana Bread', description: 'Sourdough, rye, ciabatta & more', route: '/menu/breads', icon: '🍞' },
        { label: 'Pastries', description: 'Croissants, danishes & tarts', route: '/menu/pastries', icon: '🥐' },
        { label: 'Cakes', description: 'Celebration & everyday cakes', route: '/menu/cakes', icon: '🎂' },
        { label: 'Seasonal Specials', description: 'Limited edition creations', route: '/menu/seasonal', icon: '✨' },
      ],
    },
    {
      label: 'Custom Orders',
      route: '/custom-orders',
      dropdown: [
        { label: 'Wedding Cakes', description: 'Bespoke tiers for your big day', route: '/custom-orders/wedding', icon: '💍' },
        { label: 'Birthday Cakes', description: 'Personalised celebration cakes', route: '/custom-orders/birthday', icon: '🎉' },
        { label: 'Corporate Catering', description: 'Bulk orders for events', route: '/custom-orders/corporate', icon: '🏢' },
      ],
    },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
  ];
 
  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
  }
 
  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
    if (!this.isMenuOpen()) this.activeDropdown.set(null);
  }
 
  closeMenu(): void {
    this.isMenuOpen.set(false);
    this.activeDropdown.set(null);
  }
 
  openDropdown(label: string): void {
    this.activeDropdown.set(label);
  }
 
  closeDropdown(): void {
    this.activeDropdown.set(null);
  }
 
  toggleDropdown(label: string): void {
    this.activeDropdown.update((c) => (c === label ? null : label));
  }
 
  isDropdownOpen(label: string): boolean {
    return this.activeDropdown() === label;
  }
}
 