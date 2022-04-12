import { Movie } from 'src/app/interfaces/cartelera-response';
import { createAction, props } from '@ngrx/store';
 
export const loadItems = createAction(
  '[Item List] load items'
);
 
export const loadedItems = createAction(
    '[Item List] Loaded success',
    props<{items: Movie[]}>()
);

export const removeItems = createAction(
    '[Remove Item List] Item list removed'
)