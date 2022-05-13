import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from '../../google-maps.service';
import { YoutubeService } from '../../youtube.service';

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.scss']
})
export class ZonasComponent implements OnInit {



  latitude:string=""
  longitude:string=""
  srcLocationStart:string="https://maps.google.com/maps?q="
  srcLocationFinish:string="&z=15&output=embed"
  srcLocationComplete:string=""



  constructor(private maps: GoogleMapsService) { }

  ngOnInit(): void {
    this.getLocation()
    this.srcLocationComplete=this.srcLocationStart+"restaurantes que admitan perros, Ganada"+this.srcLocationFinish
   

  }






  cargar(tag:string){
    this.srcLocationComplete=this.srcLocationStart+tag+this.srcLocationFinish
  }
  getLocation() {
    this.maps.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
    });
}

}
