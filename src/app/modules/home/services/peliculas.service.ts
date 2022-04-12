import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse, Movie } from '../../../interfaces/cartelera-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1

  constructor( private http: HttpClient) { }

  get params() {
    return {
      api_key: '975184c6f7ad15e636747f2d4722b46d',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  buscarPeliculas( texto: string ): Observable<Movie[]> {
    const params = { ... this.params, page: '1', query: texto };
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/search/movie`, {
      params
    }).pipe(
      map( data => data.results )
    )
  }

}
