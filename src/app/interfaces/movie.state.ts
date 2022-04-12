import { Movie } from "./cartelera-response";

export interface MoviesState {
    loading: boolean,
    items: ReadonlyArray<Movie>
}