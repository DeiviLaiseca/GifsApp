import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styles: [
  ]
})
export class LazyImageComponent implements OnInit {

  @Input() url!: string;

  @Input() alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url ) throw new Error('Gifs property is riquired');
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

}
