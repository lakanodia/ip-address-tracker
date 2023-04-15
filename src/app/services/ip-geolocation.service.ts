import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IIpGeolocation } from '../interfaces/Ip-geolocation';

@Injectable({
  providedIn: 'root',
})
export class IpGeolocationService {
  private apiUrl = 'https://geo.ipify.org/api/v1';
  private apiKey = 'at_EsaDXkMbPwwFlCBEkTh8cH2rTqbe6';

  constructor(private http: HttpClient) {}

  getLocation(ipAddress: string): Observable<any> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&ipAddress=${ipAddress}`;
    return this.http.get<IIpGeolocation>(url).pipe(
      map((data) => {
        return {
          ipAddress: data.ip,
          location: {
            city: data.location.city,
            country: data.location.country,
            geonameId: data.location.geonameId,
            lat: data.location.lat,
            lng: data.location.lng,
            postalCode: data.location.postalCode,
            region: data.location.region,
            timezone: data.location.timezone,
          },
        };
      })
    );
  }
}
