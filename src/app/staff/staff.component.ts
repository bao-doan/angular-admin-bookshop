import { Component, OnInit } from '@angular/core';
import { Book } from '../view-models/book';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  componentTitle: string = 'Staffs';
  books: Book[];
  selectedBook: Book;
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.getBooks();
  }
  onSelect(book):void {
    this.selectedBook = book;
  }
  getBooks(): void {
    this.bookService.getBooks().subscribe(z => this.books = z);
  };
}
