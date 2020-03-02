import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProcessedTextComponent} from './processed-text/processed-text.component';
import {TableComponent} from './table/table.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {TraditionIconComponent} from './tradition-icon/tradition-icon.component';
import {HttpClientModule} from '@angular/common/http';
import {PricePipe} from './price.pipe';
import { CastingsPipe } from './castings.pipe';
import { InlineRenderComponent } from './inline-render/inline-render.component';


@NgModule({
  declarations: [
    ProcessedTextComponent,
    TableComponent,
    TraditionIconComponent,
    PricePipe,
    CastingsPipe,
    InlineRenderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ProcessedTextComponent,
    TableComponent,
    TraditionIconComponent,
    PricePipe,
    CastingsPipe
  ],
})
export class SharedModule {
}
