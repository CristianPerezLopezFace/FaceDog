import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  constructor(private http:HttpClient) { }

  getMaps():Observable<any>{

    let url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHNC7Quzhnyym8FfBzrN3bKV0SpTe5SHY&callback=initMap";
    return this.http.get(url)
  }
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resp => {
                resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
            },
            err => {
                reject(err);
          });
    });
}
}
