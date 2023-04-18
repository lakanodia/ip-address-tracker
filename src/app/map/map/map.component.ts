import { Component, OnInit } from '@angular/core';
import { INewIpLocation } from 'src/app/interfaces/Ip-geolocation';
import { IpGeolocationService } from 'src/app/services/ip-geolocation.service';
import { LeafletService } from 'src/app/services/leaflet.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  ipAddress!: string;
  ipLocation!: INewIpLocation;

  constructor(
    private ipGeoLocationService: IpGeolocationService,
    private leafletService: LeafletService
  ) {}

  ngOnInit() {
    this.ipGeoLocationService.getLocation('').subscribe({
      next: (data) => {
        this.ipAddress = data.ipAddress;
        this.ipLocation = {
          city: data.location.city,
          country: data.location.country,
          geonameId: data.location.geonameId,
          lat: data.location.lat,
          lng: data.location.lng,
          postalCode: data.location.postalCode,
          region: data.location.region,
          timezone: data.location.timezone,
        };
        // console.log(this.ipLocation);

        this.leafletService.initMap(
          'map',
          [this.ipLocation.lat, this.ipLocation.lng],
          13
        );
        this.leafletService.addMarker(
          [this.ipLocation.lat, this.ipLocation.lng],
          'Hello, I am here!'
        );
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
  }
}
