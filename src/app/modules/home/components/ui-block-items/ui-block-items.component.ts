import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { selectListItems } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-ui-block-items',
  templateUrl: './ui-block-items.component.html',
  styleUrls: ['./ui-block-items.component.css']
})
export class UiBlockItemsComponent implements OnInit {

  constructor( private store: Store<any>) { }

  movies$: Observable<any> = new Observable();

  ngOnInit(): void {
    this.movies$ = this.store.select(selectListItems)
  }

}
