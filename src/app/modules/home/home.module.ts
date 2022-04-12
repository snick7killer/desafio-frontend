import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './components/input-search/input-search.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { UiBlockItemsComponent } from './components/ui-block-items/ui-block-items.component';
import { UiItemComponent } from './components/ui-item/ui-item.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    InputSearchComponent,
    UiBlockItemsComponent,
    UiItemComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AutocompleteLibModule,
    HttpClientModule
  ],
  exports: [ InputSearchComponent, UiBlockItemsComponent ]
})
export class HomeModule { }
