import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';
import { CamelizePipe } from 'ngx-pipes';
import { CommonModule }  from '@angular/common';

@NgModule({
  declarations: [
   MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAJOkl-7hJ08jbE5sBZs9Da9qrHP_XhXro'
    }),
    CommonModule
  ],
  exports: [
      MapComponent
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule { }
