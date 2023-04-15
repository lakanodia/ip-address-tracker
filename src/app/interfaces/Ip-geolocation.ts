export interface IIpGeolocation {
  ip: string;
  location: {
    city?: string;
    country?: string;
    geonameId?: number;
    lat: number;
    lng: number;
    postalCode?: string;
    region?: string;
    timezone?: string;
  };
}

export type INewIpLocation = Array<
  Pick<
    IIpGeolocation['location'],
    | 'city'
    | 'country'
    | 'geonameId'
    | 'lat'
    | 'lng'
    | 'postalCode'
    | 'region'
    | 'timezone'
  >
>;
