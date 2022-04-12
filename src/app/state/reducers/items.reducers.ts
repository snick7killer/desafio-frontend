import { Movie } from 'src/app/interfaces/cartelera-response';
import { MoviesState } from 'src/app/interfaces/movie.state';
import { createReducer, on } from '@ngrx/store';
import { loadedItems, loadItems, removeItems } from '../actions/items.actions';

// ESTADO INICIAL
export const initialState: MoviesState = { loading: false, items: [] }

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
      return { ...state, loading: true }
  }),
  on(loadedItems, (state, {items}) => {
    return { ...state, loading: false, items }
  }),
  on(removeItems, (state) => {
    return { ...state, loading: false, items: [] }
  })

);