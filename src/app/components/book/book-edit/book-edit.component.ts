import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  // @ts-ignore
  id = +this.route.snapshot.paramMap.get('id');

  formBookEdit: FormGroup|undefined;

  constructor(private fb:FormBuilder,
              private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router
              ) {

  }

  ngOnInit(): void {
    this.bookService.getBook(this.id).subscribe(res =>{
      this.formBookEdit = this.fb.group({
        title:[res.title],
        author:[res.author],
        description:[res.description]
      })
    })
  }
submit(){
    let data = this.formBookEdit?.value;
    this.bookService.edit(this.id,data).subscribe(res=>{
      this.router.navigate(['']).then();
    })
}
}
