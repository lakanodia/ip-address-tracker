import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [MapComponent],
})
export class MapModule {}
