import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule, ThemeService } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material/icon';
import { DetailsService } from './details.service';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    ChartsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatGridListModule
  ],
  providers: [ThemeService,DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
