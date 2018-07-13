import { Component, OnInit } from '@angular/core';
import { Banner } from '../view-models/banner';
import { BookService } from '../services/book.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  componentTitle: string = 'Banners';
  banners: Banner[];
  objectBanner: Banner = new Banner();
  selectedBanner: Banner;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBanners();
  }

  onSelectBanner(banner: Banner): void {
    this.selectedBanner = banner;
  }
  getBanners(): void {
    this.bookService.getBanners().subscribe(_ => this.banners = _);
  }
  addBanner(): void {
    this.bookService.addBanner(this.objectBanner).subscribe();
  }
  updateBanner(): void {
    this.bookService.updateBanner(this.selectedBanner).subscribe();
  }
  deleteBanner(): void {
    this.bookService.deleteBanner(this.selectedBanner).subscribe();
  }

}
