import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  HostListener,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NavigationComponent } from '../../Shared/navigation/navigation';
 
 
export interface Product {
  name: string;
  description: string;
  tag: string;
  image?: string;
}
 
export interface Pillar {
  title: string;
  text: string;
}
 
export interface ContactDetail {
  label: string;
  value: string;
}
 
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
 

  heroImagePath = '';
  heroBgTransform = 'scale(1.04)';
 
  get heroBgImage(): SafeStyle {
    return this.heroImagePath
      ? this.sanitizer.bypassSecurityTrustStyle(`url('${this.heroImagePath}')`)
      : 'none';
  }
 

  aboutImage = '';
 
  galleryImages: string[] = [
    'images/img11.jpg', 
    'images/img12.jpg', 
    'images/img3.jpg', 
    'images/img13.jpg'
  ];
 
  products: Product[] = [
    {
      name: 'Classic Banana Bread',
      description: 'Our signature recipe — golden, tender, and perfectly spiced with warm cinnamon.',
      tag: 'Signature',
      image: 'images/img7.jpg',
    },
    {
      name: 'Chocolate Chip Loaf',
      description: 'Rich banana base with generous dark chocolate morsels melted throughout.',
      tag: 'Fan Favourite',
      image: 'images/img3.jpg',
    },
    {
      name: 'Walnut & Honey',
      description: 'Toasted walnuts, a drizzle of local honey, and a hint of nutmeg in every slice.',
      tag: 'Seasonal',
      image: 'images/img5.jpg',
    },
  ];
 

  pillars: Pillar[] = [
    { title: 'Artisan Process',  text: 'Hand-mixed, never machine-rushed. Every loaf gets the time it deserves.' },
    { title: 'Real Ingredients', text: 'No artificial flavours, no fillers — just pantry-honest baking.' },
    { title: 'Made to Order',    text: 'We bake fresh when you order, not a day before.' },
    { title: 'With Heart',       text: 'Guided by the kind of care you can actually taste.' },
  ];
 
  contactDetails: ContactDetail[] = [
    { label: 'Email',            value: 'hello@shoyesbananabread.com' },
    { label: 'Phone / WhatsApp', value: '+1 (268) 000-0000' },
    { label: 'Location',         value: 'Antigua, West Indies' },
  ];
 

  private visibleSections = new Set<string>();
  private intersectionObserver!: IntersectionObserver;
 
  constructor(
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
  ) {}
 
 
  ngOnInit(): void {}
 
  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }
 
  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }
 
 
  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    this.heroBgTransform = `scale(1.04) translateY(${y * 0.25}px)`;
    this.cdr.markForCheck();
  }
 
  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
 
 
  isVisible(id: string): boolean {
    return this.visibleSections.has(id);
  }
 
  private setupIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        let changed = false;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset['revealId'];
            if (id && !this.visibleSections.has(id)) {
              this.visibleSections.add(id);
              this.intersectionObserver.unobserve(entry.target);
              changed = true;
            }
          }
        });
        if (changed) this.cdr.markForCheck();
      },
      { threshold: 0.12 },
    );
 
    const sectionMap: Record<string, string> = {
      'products-header': '[data-reveal-id="products-header"]',
      'banner-eyebrow':  '[data-reveal-id="banner-eyebrow"]',
      'banner-title':    '[data-reveal-id="banner-title"]',
      'banner-quote':    '[data-reveal-id="banner-quote"]',
      'about-image':     '[data-reveal-id="about-image"]',
      'about-text':      '[data-reveal-id="about-text"]',
      'contact-info':    '[data-reveal-id="contact-info"]',
      ...Object.fromEntries(
        this.products.map((_, i) => [`product-${i}`, `[data-reveal-id="product-${i}"]`])
      ),
    };
 
    Object.entries(sectionMap).forEach(([, selector]) => {
      const el = document.querySelector<HTMLElement>(selector);
      if (el) this.intersectionObserver.observe(el);
    });
  }
}