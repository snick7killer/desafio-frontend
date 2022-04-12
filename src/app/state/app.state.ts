import { MoviesState } from "src/app/interfaces/movie.state";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer } from "./reducers/items.reducers";

export interface AppState {
    items: MoviesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    items: itemsReducer
}