import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from '../services/genre.service';
import { Genre } from '../view-models/genre';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  componentTitle: string = 'Categories';
  genres: Genre[];
  name: string;
  selectedGenre: Genre;
  selectedDelete: Genre;
  updatingGenre = this.selectedDelete;
  objectGenre = new Genre();
  noti:string;
  //For add, edit, delete notification
  notification = {}; 

  constructor(private genreService: GenreService, private location: Location, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getGenres();
  }
  onSelect(genre):void {
    this.selectedGenre = genre;
  }
  onSelectDelete(genre):void {
    this.selectedDelete = genre;
  }
  getGenres(): void {
    this.genreService.getGenres().subscribe(z => this.genres = z);
  };
  addGenre(): void {
    this.noti = this.objectGenre.name;
    if (this.objectGenre.name.length > 0) {
      this.genreService.addGenre(this.objectGenre).subscribe(_ => {
        this.objectGenre.name = "";
        this.genres.push(_);
      });
    }
    this.onNoti();
  }
  deleteGenre(genre: Genre): void {
    this.genres = this.genres.filter(h => h !== genre);
    this.genreService.deleteGenre(genre).subscribe(
      
    );
  }
  updateGenre(): void {
    this.genreService.updateGenre(this.selectedGenre)
      .subscribe();
  }
  // Snackbar notification
  onNoti():void {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}
