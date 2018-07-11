import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
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
  bookForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private genreService: GenreService
  ) {

  }

  ngOnInit() {
    this.createAddForm();
  }
  createAddForm() {
    this.getGenres();
    // this.objectBook = new Book();
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      author: ['', [Validators.required, Validators.minLength(4)]],
      publisher: ['', [Validators.required, Validators.minLength(4)]],
      pages: [''],
      weight: [''],
      releaseDate: [''],
      sku: [''],
      previousPrice: ['', [Validators.required]],
      sellingPrice: ['', [Validators.required]],
      images_main: ['', [Validators.required]],
      size_width: [''],
      size_height: [''],
      size_depth: [''],
      shortDescription: [''],
      fullDescription: [''],
      genre: ['', [Validators.required]]
    });
  }
  get f() { return this.bookForm.controls }
  onSaveBook(): void {
    // Assign value from bookForm to objectBook
    this.objectBook.title = this.f.title.value;
    this.objectBook.author = this.f.author.value;
    this.objectBook.publisher = this.f.publisher.value;
    this.objectBook.genre._id = this.f.genre.value._id;
    this.objectBook.genre.name = this.f.genre.value.name;
    this.objectBook.pages = this.f.pages.value;
    this.objectBook.weight = this.f.weight.value;
    this.objectBook.releaseDate = this.f.releaseDate.value;
    this.objectBook.sku = this.f.sku.value;
    this.objectBook.previousPrice = this.f.previousPrice.value;
    this.objectBook.sellingPrice = this.f.sellingPrice.value;
    this.objectBook.images.main = this.f.images_main.value;
    this.objectBook.size.width = this.f.size_width.value;
    this.objectBook.size.height = this.f.size_height.value;
    this.objectBook.size.depth = this.f.size_depth.value;
    this.objectBook.shortDescription = this.f.shortDescription.value;
    this.objectBook.fullDescription = this.f.fullDescription.value;
    // End of Assigning
    this.addBook();
  }
  getGenres(): void {
    this.genreService.getGenres().subscribe(__ => this.genres = __);
  }
  addBook(): void {
    this.bookService.addBook(this.objectBook).subscribe(_ => {
      console.log(_);
      alert(`You have added successfully!\nProduct: ${this.bookForm.value.title}\nAuthor: ${this.bookForm.value.author}`);
    });
  }
  onCheckMissing(): boolean {
    return true;
  }
  onListMissing(): void {

  }
  onCallModal() {
    //this is for data-toggle=""
  }
}
