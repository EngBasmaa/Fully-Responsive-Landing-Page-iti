import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutBookComponent } from "./components/about-book/about-book.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FAQComponent } from "./components/faq/faq.component";
import { BundleOfferComponent } from "./components/bundle-offer/bundle-offer.component";
import { PlansComponent } from "./components/plans/plans.component";
import { AboutAuthorComponent } from "./components/about-author/about-author.component";
import { FeaturesComponent } from "./components/features/features.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
@Component({
  selector: 'app-root',
  imports: [NavComponent, FooterComponent, HeaderComponent, AboutBookComponent, ContactComponent, FAQComponent, BundleOfferComponent, PlansComponent, AboutAuthorComponent, FeaturesComponent, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Landing-Page';
}
