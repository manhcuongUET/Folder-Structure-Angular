import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: InterceptorInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule { }
