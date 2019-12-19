import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './components/product/product.component';
import { ClientComponent } from './components/client/client.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { TestComponent } from './components/layout/test/test.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ClientComponent, FooterComponent, HeaderComponent, TestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
