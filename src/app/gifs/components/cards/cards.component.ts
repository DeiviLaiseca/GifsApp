import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  @Input()
  public gif!: Gifs;

  ngOnInit(): void {
    if( !this.gif ) throw new Error('Gifs property is riquired');
  }
}
