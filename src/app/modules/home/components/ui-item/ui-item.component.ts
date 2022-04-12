import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-ui-item',
  templateUrl: './ui-item.component.html',
  styleUrls: ['./ui-item.component.css']
})
export class UiItemComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
