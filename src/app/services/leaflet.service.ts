import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class LeafletService {
  private map!: L.Map;
  constructor() {}

  initMap(element: string, coords: [number, number], zoomLevel: number) {
    this.map = L.map(element).setView(coords, zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 30,
    }).addTo(this.map);
  }

  addMarker(coords: [number, number], popupText: string) {
    const marker = L.marker(coords).addTo(this.map);
    if (popupText) {
      marker.bindPopup(popupText).openPopup();
    }
  }
}
