import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './components/core/core.module';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './components/layout/layout.module';
import { NgModule } from '@angular/core';
import { RoutesModule } from './components/routes/routes.module';
import { SharedModule } from './components/shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      FormsModule,
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule, // required for ng2-tag-input
      CoreModule,
      LayoutModule,
      SharedModule.forRoot(),
      RoutesModule,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
          }
      })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
