import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { SecNavBarComponent } from './navigation/sec-nav-bar/sec-nav-bar.component';
import { MarketplaceSearchComponent } from './navigation/marketplace-search/marketplace-search.component';
import { FooterComponent } from './footer/footer.component';
import { HorizontalCardsComponent } from './cards/horizontal-cards/horizontal-cards.component';
import { VerticalCardsComponent } from './cards/vertical-cards/vertical-cards.component';
import { CartLayoutComponent } from './navigation/cart-layout.component';
import { HomeLayoutComponent } from './navigation/home-layout.component';
import { SignupLayoutComponent } from './navigation/signup-layout/signup-layout.component';
import { LoginLayoutComponent } from './navigation/login-layout/login-layout.component';
import { MyFeedLayoutComponent } from './navigation/my-feed-layout/my-feed-layout.component';
import { ViewCategoriesLayoutComponent } from './navigation/view-categories-layout/view-categories-layout.component';
import { UserInfoComponent } from './navigation/user-info/user-info.component';
import { CompComponent } from './comp/comp.component';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecNavBarComponent,
    MarketplaceSearchComponent,
    FooterComponent,
    HorizontalCardsComponent,
    VerticalCardsComponent,
    CartLayoutComponent,
    HomeLayoutComponent,
    SignupLayoutComponent,
    LoginLayoutComponent,
    MyFeedLayoutComponent,
    ViewCategoriesLayoutComponent,
    UserInfoComponent,
    CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function firebaseConfig(firebaseConfig: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

