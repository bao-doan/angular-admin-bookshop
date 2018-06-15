import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { forbiddenNameValidator } from '../app-directive/forbidden-name.directive';
import { BookService } from '../services/book.service';
import { GenreService } from '../services/genre.service';
import { Book } from '../view-models/book';
import { Genre } from '../view-models/genre';
import { Image } from '../view-models/image';
import { Size } from '../view-models/size';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  genres: Genre[];
  // genre:Genre = new Genre();
  objectBook: Book = new Book();
  // test: string = this.genres[0].name;
  // _id: string;
  // title: string;
  // shortDescription: string;
  // fullDescription: string;
  // author: string;
  // publisher: string;
  // pages: number;
  // weight: number;
  // sku: string;
  // previousPrice: number;
  // sellingPrice: number;
  // releaseDate: string;
  // images: Image;
  // size: Size;
  // genre: Genre;

  constructor(private bookService: BookService, private genreService: GenreService) { }

  ngOnInit() {
    this.getGenre();
    // this.objectBook.genre.name = this.genres[0].name;
    if (this.objectBook.genre !== undefined) {
      // this.objectBook.genre = this.genres[0];
      alert(`baodoan: ${this.objectBook.genre.name}`);
    }
  }
  getGenre(): void {
    this.genreService.getGenres().subscribe(__ => this.genres = __)
  }
  addBook(): void {
    this.bookService.addBook(this.objectBook).subscribe(_ => {
      console.log(_);
    });
  }
}
