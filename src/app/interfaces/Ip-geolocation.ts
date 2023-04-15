export interface IpGeolocation {
  ip: string;
  location: {
    city: string;
    country: string;
    geonameId: number;
    lat: number;
    lng: number;
    postalCode: '';
    region: string;
    timezone: string;
  };
}
