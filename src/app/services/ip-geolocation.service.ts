import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpGeolocationService {
  private apiUrl = 'https://geo.ipify.org/api/v1';
  private apiKey = 'at_EsaDXkMbPwwFlCBEkTh8cH2rTqbe6';

  constructor(private http: HttpClient) {}

  getLocation(ipAddress: string): Observable<any> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&ipAddress=${ipAddress}`;
    return this.http.get<any>(url).pipe(
      map((data) => {
        console.log('data', data);
        console.log('data_ip', data.ip);
        console.log('data_locations', data.location);
        return {
          ipAddress: data.ip,
          location: {
            lat: data.location.lat,
            lng: data.location.lng,
          },
        };
      })
    );
  }
}
