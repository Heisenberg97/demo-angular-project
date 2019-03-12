import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CamelizePipe } from 'ngx-pipes';
import { ObserveOnOperator } from 'rxjs/operators/observeOn';

@Injectable()
export class MapService {
    private geoCoder;
    private locationCache : any = {};

    constructor(private camelizePipe : CamelizePipe){}

    private camelize (value : string) : string {
        return this.camelizePipe.transform(value);
    }

    private cacheLocation( location : string, coordinates : any) {
        
        const camelizedLocation = this.camelize(location);

        this.locationCache[camelizedLocation] = coordinates;
    }
    
    private isLocationCached (location:string) : boolean {
        
        return this.locationCache[this.camelize(location)];
    }

    public geocodelocation (location : string) : Observable<any>{
        this.geoCoder = new (<any>window).google.maps.Geocoder();

        return new Observable((observer) => {
           
            if(this.isLocationCached(location)){
                observer.next(this.locationCache[this.camelize(location)]);
            } else {
                this.geoCoder.geocode({address : location}, (result, status) => {
                    if(status === 'OK'){
                        const geometry = result[0].geometry.location;
                        const coordinates = {
                            lat : geometry.lat(), lng : geometry.lng()
                        };
                        this.cacheLocation(location, coordinates);
                        observer.next(coordinates);
                    } else {
                        observer.error ('Geolocation failure!!'); 
                    }
                });
            }
        });
    }
}