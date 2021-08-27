import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookAddComponent } from './components/book/book-add/book-add.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
