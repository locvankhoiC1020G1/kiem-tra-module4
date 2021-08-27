import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./components/book/book-list/book-list.component";
import {BookAddComponent} from "./components/book/book-add/book-add.component";
import {BookDetailComponent} from "./components/book/book-detail/book-detail.component";
import {BookEditComponent} from "./components/book/book-edit/book-edit.component";

const routes: Routes = [
  {
    path: '',
    children:[{
      path: '',
      component:BookListComponent
    },
      {
        path: 'create',
        component:BookAddComponent
      },
      {
        path: ':id/detail',
        component:BookDetailComponent
      },
      {
        path: ':id',
        component:BookDetailComponent
      },
      {
        path: ':id/edit',
        component: BookEditComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
