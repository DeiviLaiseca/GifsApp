import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, GifsApp } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gifs[] = [];

  private ApiKey:  string = '8rXQ4D4Hui39tESIco4z1IUgkX4NUQ1c';
  private baseUrl: string = 'https://api.giphy.com/v1/gifs/search'

  private _tagsHistory: string[] = [];

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
  }

  get tagsHistory () {
    return [...this._tagsHistory];
  }

  public organizedHistory ( tag: string ): void {
    tag= tag.toLowerCase();

    if( this._tagsHistory.includes( tag ) ) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag );
    };

    this._tagsHistory.unshift( tag );

    this._tagsHistory = this._tagsHistory.splice( 0, 10 );

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {

    localStorage.setItem('history', JSON.stringify( this._tagsHistory ));

  }

  private loadLocalStorage(): void {
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse( localStorage.getItem('history')!)

    if( this._tagsHistory.length === 0 ) return;

    this.searchTag( this._tagsHistory[0] );

  }

  searchTag( tag: string ): void {

    if( tag.length === 0 ) return;

    this.organizedHistory( tag );

    const params = new HttpParams()
    .set('api_key', this.ApiKey )
    .set('q', tag )
    .set('limit', '10');

    this.http.get<GifsApp>(`${this.baseUrl}`,{ params })
    .subscribe( resp => {
      this.gifsList = resp.data;
      console.log( resp.data );
    })

  }
}
