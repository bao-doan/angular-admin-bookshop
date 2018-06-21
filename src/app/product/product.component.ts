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
  genres: Genre[];
  genre: Genre;
  books: Book[];
  pages: number;
  selectedPage: number;
  pageArray;
  selectedBook: Book = new Book();
  step: number = 2;
  books2: Book[];
  constructor(private bookService:BookService, private genreService: GenreService) { }

  ngOnInit() {
    this.getBooks();
    this.getGenres();
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
      this.books2 = z;
      this.onCountPages(this.books,this.step);
      this.onPrintPages();
    });
  };
  getGenres(): void {
    this.genreService.getGenres().subscribe(_ => this.genres = _);
  };
  deleteBook(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteBook(book).subscribe();
  }
  updateBook():void{
    this.bookService.updateBook(this.selectedBook)
      .subscribe();
  }
  compareFn(optionOne:Genre, optionTwo:Genre): boolean {
      return optionOne._id == optionTwo._id;
  }
  onShowItem(a: number, b:number): void {
    this.books = this.books.slice(a,b);
  }
  onCountPages(books: Book[], itemsPerPage: number): void {
    let items =  this.books.length;
    let pagesCount: number;
    if (items % itemsPerPage == 0) {
      pagesCount = items/itemsPerPage;
    } else {
      pagesCount = Math.floor(items/itemsPerPage) + 1;
    }
    this.pages = pagesCount;
    console.log(`Tong so books  ${this.books.length}`);
    console.log(`So book/page la  ${this.step}`);
    console.log(`Tong so pages la: this.pages =  ${this.pages}`);
  }
  onPrintPages(): void {
    this.pageArray = new Array(this.pages);
    for (let i = 0; i < this.pageArray.length; i++) {
      this.pageArray[i] = i + 1;
    }
    console.log(this.pageArray);
  }
  onShowItems(i: number): void {
      this.selectedPage = i;
      let a: number = this.step*i -this.step;
      let b: number 
      // = this.step*i;
      if (this.step*i >= this.books.length) {
        b = this.books.length;
      } else {
        b = this.step*i;
      }
      this.books2 = this.books.slice(a , b);
  }
  onShowAll(): void {
    this.books2 = this.books;
  }
}
