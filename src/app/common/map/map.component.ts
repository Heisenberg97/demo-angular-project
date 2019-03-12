import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { MapService } from './map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() location : string;

  isPositionError: boolean = false;
  lat: number;
  lng: number;
  constructor(private mapService : MapService,
              private ref : ChangeDetectorRef) { }

  mapReadyFunctionCall(){
    this.mapService.geocodelocation(this.location).subscribe((coords)=>{
      coords = JSON.parse(coords);
      this.lat = coords.lat;
      this.lng = coords.lng;

      this.ref.detectChanges();
    }, () => {
      this.isPositionError = true;
    });
  }

}
