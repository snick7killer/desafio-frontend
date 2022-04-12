import { MoviesState } from 'src/app/interfaces/movie.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectItemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
    selectItemsFeature,
    (state: MoviesState) => state.items
);

export const selectLoading = createSelector(
    selectItemsFeature,
    (state: MoviesState) => state.loading
);