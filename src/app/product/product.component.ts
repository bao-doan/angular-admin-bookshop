import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../view-models/book';
import { GenreService } from '../services/genre.service';
import { Genre } from '../view-models/genre';
import { Image } from '../view-models/image';
import { Size } from '../view-models/size';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  componentTitle: string =  'Products';
  books: Book[];
  genre: Genre;
  genres: Genre[];
  selectedBook: Book;
  selectedEdit: Book = new Book();
  selectedDelete: Book;
  constructor(private bookService:BookService, private genreService: GenreService) { }

  ngOnInit() {
    this.getBooks();
    this.getGenres();
  }
  onSelect(book: Book): void {
    this.selectedBook = book;
    if (this.selectedBook.images == null) {
      this.selectedBook.images = new Image();
    }
  }
  onSelectEdit(book: Book): void {
    this.selectedEdit = book;
    if(this.selectedEdit.images==null)
    {
      this.selectedEdit.images = new Image();
    }
    // if (this.selectedEdit.previousPrice == null) {
    //   this.selectedEdit.previousPrice = ;
    // }
    if (this.selectedEdit.size == null) {
      this.selectedEdit.size = new Size();
    }
  }
  onSelectDelete(book): void {
    this.selectedDelete = book;
  }
  getBooks(): void {
    this.bookService.getBooks().subscribe(z => this.books = z);
  };
  getGenres(): void {
    this.genreService.getGenres().subscribe(_ => this.genres = _);
  };
  deleteBook(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteBook(book).subscribe();
  }
  updateBook():void{
    this.bookService.updateBook(this.selectedEdit)
      .subscribe();
  }
  compareFn(optionOne:Genre, optionTwo:Genre): boolean {
    return optionOne._id == optionTwo._id;
  }
}
