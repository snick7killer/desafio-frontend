import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasService } from '../../services/peliculas.service';
import { Store } from '@ngrx/store';
import { loadedItems, removeItems } from 'src/app/state/actions/items.actions';
import { Movie } from 'src/app/interfaces/cartelera-response';


@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  keyword = 'title';
  data$: Movie[] = [];
  loading$: Observable<boolean> = new Observable()

  constructor( 
    private store: Store<any>,
    private peliculasService: PeliculasService 
  ) { }

  ngOnInit(): void { }


  autoComplete( nameMovie: any ) {
      this.peliculasService.buscarPeliculas( nameMovie.target.value )
        .subscribe( (movies: Movie[]) => {
          this.data$ = movies;
        })
  }

  updateState( movieName: string) {
    if( movieName.trim().length == 0 ) {
      this.store.dispatch(removeItems())
    } else {
      this.store.dispatch(loadedItems({ items: this.data$ }))
    }
  }


}
