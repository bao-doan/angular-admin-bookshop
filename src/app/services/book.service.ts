import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../view-models/book';
import { Banner } from '../view-models/banner';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private booksUrl = 'http://green-web-bookshop.herokuapp.com/api/books';
  private bannersUrl = 'http://green-web-bookstore.herokuapp.com/api/banners';
  constructor(private http: HttpClient) { }
  /** GET api-s from the server */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions);
  }
  deleteBook (book: Book): Observable<Book> {
    // const id = typeof genre === 'string' ? genre : genre._id;
    const url = `${this.booksUrl}/${book._id}`;
    return this.http.delete<Book>(url, httpOptions);
  }
  updateBook(book: Book): Observable<Book> {
    const url = `${this.booksUrl}/${book._id}`;
    return this.http.put<Book>(url, book, httpOptions )
  }
  searchHeroes(term: string): Observable<Book[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      // return of([]);
      console.log(`Not Found`);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/?title=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Book[]>('searchHeroes', []))
    );
  }
  // For Search Handling
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
    console.log('HeroService: ' + message);
  }
  // End of Search Handling
  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.bannersUrl);
  }
  addBanner(banner: Banner): Observable<Banner> {
    return this.http.post<Banner>(this.bannersUrl, banner, httpOptions);
  }
  updateBanner(banner: Banner): Observable<Banner> {
    const url = `${this.bannersUrl}/${banner._id}`;
    return this.http.put<Banner>(url, banner, httpOptions )
  }
  deleteBanner(banner: Banner): Observable<Banner> {
    // const id = typeof genre === 'string' ? genre : genre._id;
    const url = `${this.bannersUrl}/${banner._id}`;
    return this.http.delete<Banner>(url, httpOptions);
  }
}
