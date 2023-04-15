import { Component, OnInit } from '@angular/core';
import { IpGeolocationService } from 'src/app/services/ip-geolocation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  ipAddress!: string;
  ipLocation!: any;

  constructor(private ipGeoLocationService: IpGeolocationService) {}

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
        console.log(this.ipLocation);
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
  }
}
