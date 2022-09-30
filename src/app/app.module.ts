import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { SecNavBarComponent } from './navigation/sec-nav-bar/sec-nav-bar.component';
import { BottomNavBarComponent } from './navigation/bottom-nav-bar/bottom-nav-bar.component';
import { MarketplaceSearchComponent } from './navigation/marketplace-search/marketplace-search.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { HorizontalCardsComponent } from './cards/horizontal-cards/horizontal-cards.component';
import { VerticalCardsComponent } from './cards/vertical-cards/vertical-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecNavBarComponent,
    BottomNavBarComponent,
    MarketplaceSearchComponent,
    FooterComponent,
    CardsComponent,
    HorizontalCardsComponent,
    VerticalCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
