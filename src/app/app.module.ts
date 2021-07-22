import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';


import { HttpClientModule } from '@angular/common/http';
import { PaintingsSectionComponent } from './components/paintings-section/paintings-section.component';
import { PaintingsSearchBarComponent } from './components/paintings-search-bar/paintings-search-bar.component';
import { PaintingsGridComponent } from './components/paintings-grid/paintings-grid.component';
import {PaintingsDataService} from './shared/services/paintings-data.service';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    PaintingsSectionComponent,
    PaintingsSearchBarComponent,
    PaintingsGridComponent,
    NewsComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PaintingsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
