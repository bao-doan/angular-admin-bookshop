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
  componentTitle: string = 'Products';
  genres: Genre[];
  genre: Genre;
  books: Book[];
  selectedBook: Book = new Book();
  // For Search/Filter
  title: string;
  // For Pagination
  books2: Book[];
  step: number;
  pages: number;
  selectedPage: number = 1;
  pageArray: Number[];
  option: number;
  checkPluralItems: string = '';
  checkPluralBooks: string = '';
  constructor(private bookService: BookService, private genreService: GenreService) { }

  ngOnInit() {
    this.getBooks();
    this.getGenres();
    this.step = 5;
  }
  onSelect(book: Book): void {
    this.selectedBook = book;
    if (this.selectedBook.pages == null) {
      this.selectedBook.pages = 0;
      console.log(`null pages changed to ${this.selectedBook.pages}`)
    }
    if (this.selectedBook.weight == null) {
      this.selectedBook.weight = 0;
      console.log(`null weight changed to ${this.selectedBook.weight}`)
    }
    if (this.selectedBook.releaseDate == null) {
      // this.selectedBook.releaseDate = `${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`;
      this.selectedBook.releaseDate = '';
      console.log(`null date changed to ${this.selectedBook.releaseDate}`)
    }
    if (this.selectedBook.sku == null) {
      this.selectedBook.sku = 'No SKU';
      console.log(`null sku changed to ${this.selectedBook.sku}`)
    }
    if (this.selectedBook.images == null) {
      this.selectedBook.images = new Image();
    }
    if (this.selectedBook.size == null) {
      this.selectedBook.size = new Size();
    }
  }
  getBooks(): void {
    this.bookService.getBooks().subscribe(z => {
      this.books = z;
      this.books2 = z.slice(0, this.step);
      this.onCountPages(z, this.step);
      this.onPrintLabel();
      this.checkPluralHandler();
      this.onShowItems(this.selectedPage);
    });
  };
  getGenres(): void {
    this.genreService.getGenres().subscribe(_ => this.genres = _);
  };
  deleteBook(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteBook(book).subscribe();
  }
  updateBook(): void {
    this.bookService.updateBook(this.selectedBook)
      .subscribe();
  }
  compareFn(optionOne: Genre, optionTwo: Genre): boolean {
    optionOne = new Genre();
    optionTwo = new Genre();
    return optionOne._id == optionTwo._id;
  }
  onCountPages(books: Book[], step: number): void {
    let items = this.books.length;
    let pages: number;
    if (items % step == 0) {
      pages = items / step;
    } else {
      pages = Math.floor(items / step) + 1;
    }
    this.pages = pages;
    console.log(`Books = ${this.books.length}`);
    console.log(`Step = ${this.step}`);
    console.log(`Pages = ${this.pages}`);
  }
  onPrintLabel(): void {
    this.pageArray = new Array(this.pages);
    for (let i = 0; i < this.pageArray.length; i++) {
      this.pageArray[i] = i + 1;
    }
    console.log(this.pageArray);
  }
  onShowItems(i: number): void {
    // this.onShowAll();
    this.selectedPage = i;
    let a: number = this.step * i - this.step;
    let b: number
    if (this.step * i >= this.books.length) {
      b = this.books.length;
    } else {
      b = this.step * i;
    }
    this.books2 = this.books.slice(a, b);
    this.checkPluralHandler();
    console.log(`selectedPage: ${this.selectedPage}`);
  }
  onShowAll(): void {
    this.books2 = this.books;
    this.checkPluralHandler();
  }
  onShowOption(step: number): void {
    // this.step = option;
    this.onCountPages(this.books, this.step);
    this.onPrintLabel();
    this.onShowItems(1);
  }
  onNextPage(selectedPage: number): void {
    // if(selectedPage < this.pages) {

    //   this.selectedPage = selectedPage + 1;
    // } else {
    //   this.selectedPage = selectedPage;
    // }
    this.selectedPage = (selectedPage < this.pages) ? (this.selectedPage = selectedPage + 1) : (this.selectedPage = selectedPage);
    this.onShowItems(this.selectedPage);
    console.log(`Triggered "Next" ${this.selectedPage}/${this.pages}`);
  }
  onPrevPage(selectedPage: number): void {
    // if(selectedPage > 1) {

    //   this.selectedPage = selectedPage - 1;
    // } else {
    //   this.selectedPage = 1;
    // }
    this.selectedPage = (selectedPage > 1) ? (this.selectedPage = selectedPage - 1) : (this.selectedPage = 1);
    this.onShowItems(this.selectedPage);
    console.log(`Triggered "Prev" ${this.selectedPage}/${this.pages}`);
  }
  checkPluralHandler():void {
    this.checkPluralBooks = (this.books.length > 1) ? "items":"item";
    this.checkPluralItems = (this.books2.length > 1) ? "items":"item";
  }
}
