import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-component-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('textTag')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor ( private gifsService: GifsService ) {};

  searchTag(): void {

    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag( newTag );

    this.tagInput.nativeElement.value = '';

  }

}
