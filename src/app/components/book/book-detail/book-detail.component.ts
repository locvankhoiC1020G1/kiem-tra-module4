import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {Ibook} from "../../../ibook";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  // @ts-ignore
  id = +this.route.snapshot.paramMap.get('id');

  book: any

  constructor(private bookService: BookService,
              private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.getOneBook();
  }

  getOneBook() {
    this.bookService.getBook(this.id).subscribe(res => {
      this.book =res;
    })
  }
}
