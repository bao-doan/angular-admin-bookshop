import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  componentTitle: string = 'Product Add';
  genres: Genre[];
  objectBook: Book = new Book();
  // newBook: Book = {
  //   _id: string = this.bookForm.value._id;
  // }
  chosenGenre: Genre = new Genre('');
  selectedGenre: Genre = new Genre('');
  bookForm: FormGroup;
  constructor(private bookService: BookService, private genreService: GenreService) { }

  ngOnInit() {
    this.getGenre();
    this.bookForm = new FormGroup({
      'title': new FormControl(this.objectBook.title, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'author': new FormControl(this.objectBook.author, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'publisher': new FormControl(this.objectBook.publisher, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'pages': new FormControl(this.objectBook.pages),
      'weight': new FormControl(this.objectBook.weight),
      'releaseDate': new FormControl(this.objectBook.releaseDate),
      'sku': new FormControl(this.objectBook.sku),
      'previousPrice': new FormControl(this.objectBook.previousPrice, [
        Validators.required
      ]),
      'sellingPrice': new FormControl(this.objectBook.sellingPrice, [
        Validators.required
      ]),
      'images_main': new FormControl(this.objectBook.images.main, [
        Validators.required
      ]),
      'size_width': new FormControl(this.objectBook.size.width),
      'size_height': new FormControl(this.objectBook.size.height),
      'size_depth': new FormControl(this.objectBook.size.depth),
      'shortDescription': new FormControl(this.objectBook.shortDescription),
      'fullDescription': new FormControl(this.objectBook.fullDescription),
      'genre': new FormControl(this.objectBook.genre, [
        Validators.required
      ]),
      'genre__id': new FormControl(this.objectBook.genre._id
        // , [Validators.required]
      ),
      'genre_name': new FormControl(this.objectBook.genre.name),
    });
  }
  get title() { return this.bookForm.get('title'); }
  get author() { return this.bookForm.get('author'); }
  get publisher() { return this.bookForm.get('publisher'); }
  get pages() { return this.bookForm.get('pages'); }
  get weight() { return this.bookForm.get('weight'); }
  get releaseDate() { return this.bookForm.get('releaseDate'); }
  get sku() { return this.bookForm.get('sku'); }
  get previousPrice() { return this.bookForm.get('previousPrice'); }
  get sellingPrice() { return this.bookForm.get('sellingPrice'); }
  get images_main() { return this.bookForm.get('images_main'); }
  get size_width() { return this.bookForm.get('size_width'); }
  get size_height() { return this.bookForm.get('size_height'); }
  get size_depth() { return this.bookForm.get('size_depth'); }
  get shortDescription() { return this.bookForm.get('shortDescription'); }
  get fullDescription() { return this.bookForm.get('fullDescription'); }
  get genre__id() { return this.bookForm.get('genre__id'); }
  get genre_name() { return this.bookForm.get('genre_name'); }
  get genre() { return this.bookForm.get('genre'); }
  // onCheckSelect(x:Genre): void {
  //   this.bookForm.value.genre__id = x._id;
  // }
  onSaveBook():void {
  // Assign value from bookForm to objectBook
  this.objectBook.title = this.bookForm.value.title;
  this.objectBook.author = this.bookForm.value.author;
  this.objectBook.publisher = this.bookForm.value.publisher;
  this.objectBook.genre._id = this.bookForm.value.genre._id;
  this.objectBook.genre.name = this.bookForm.value.genre.name;
  this.objectBook.pages = this.bookForm.value.pages;
  this.objectBook.weight = this.bookForm.value.weight;
  this.objectBook.pages = this.bookForm.value.pages;
  this.objectBook.releaseDate = this.bookForm.value.releaseDate;
  this.objectBook.sku = this.bookForm.value.sku;
  this.objectBook.previousPrice = this.bookForm.value.previousPrice;
  this.objectBook.sellingPrice = this.bookForm.value.sellingPrice;
  this.objectBook.images.main = this.bookForm.value.images_main;
  this.objectBook.size.width = this.bookForm.value.size_width;
  this.objectBook.size.height = this.bookForm.value.size_height;
  this.objectBook.size.depth = this.bookForm.value.size_depth;
  this.objectBook.shortDescription = this.bookForm.value.shortDescription;
  this.objectBook.fullDescription = this.bookForm.value.fullDescription;
  // End of Assigning
  this.addBook();
  
  }
  getGenre(): void {
    this.genreService.getGenres().subscribe(__ => this.genres = __);
  }
  addBook(): void {
    this.bookService.addBook(this.objectBook).subscribe(_ => {
      console.log(_);
      alert(`Added product: ${this.bookForm.value.title}\nAuthor: ${this.bookForm.value.author}`);
    });
  }
  
}
