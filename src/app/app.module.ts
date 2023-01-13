import { HashLocationStrategy } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { LayoutComponent } from './core';
import { RodapeComponent } from './core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule
(
  {
    declarations:
    [
      AppComponent,
      LayoutComponent,
      RodapeComponent
    ],
    imports:
    [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FontAwesomeModule,
      NgbModule,
      ToastrModule.forRoot
      (
        {
          positionClass: 'toast-top-right',
          closeButton: true,
          progressBar: true,
          timeOut: 8000
        }
      ),
      AppRoutingModule
    ],
    providers:
    [
      {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
      }
    ],
    bootstrap:
    [
      AppComponent
    ]
  }
)
export class AppModule
{
  constructor(faIconLibrary: FaIconLibrary)
  {
    faIconLibrary.addIconPacks(fab, far, fas);
  }
}