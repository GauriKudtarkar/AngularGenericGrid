import {
    NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
    BrowserModule
} from '@angular/platform-browser';

import {
    AppComponent
} from './app.component';

import {DataTableFilter} from './dataTableFilter';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,DataTableFilter],
    bootstrap: [AppComponent]
})
export class AppModule { }


