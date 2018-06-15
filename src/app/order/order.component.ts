import { Component, OnInit } from '@angular/core';
import { Book } from '../view-models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  componentTitle: string = 'Manage Orders';
  books: Book[];
  selectedBook: Book;
  constructor(private bookServive: BookService) { }

  ngOnInit() {
    this.getBooks();
  }
  onSelect(book):void {
    this.selectedBook = book;
  }
  getBooks(): void {
    this.bookServive.getBooks().subscribe(_ => this.books = _);
  }

}
