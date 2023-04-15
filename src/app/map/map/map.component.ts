import { Component, OnInit } from '@angular/core';
import { IpGeolocationService } from 'src/app/services/ip-geolocation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  ipAddress!: string;
  ipLocation: any;

  constructor(private ipGeoLocationService: IpGeolocationService) {}

  ngOnInit() {
    this.ipGeoLocationService.getLocation('').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
  }
}
