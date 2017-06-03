import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PaginationModule } from 'ng2-pagination'

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { UtilService } from './util.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SortByPipe } from './sort-by.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SortByPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [EmployeeService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
