import { Component } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-localmap',
  templateUrl: './localmap.page.html',
  styleUrls: ['./localmap.page.scss'],
})
export class LocalmapPage {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
      title: "The Shamrock Bar",
      latitude: 53.71959960125443,
      longitude: -8.998274803161623,
    },
    {
      title: "P.J Byrnes Bar & Grocery Shop",
      latitude: 53.719713876873634,
      longitude: -8.998918533325197
    },
    {
      title: "O'Brien's Bar",
      latitude: 53.71923137770263,
      longitude: -8.999235033988954
    },
    {
      title: "Warde's Pub",
      latitude: 53.72012336195936,
      longitude: -8.998521566390993
    },
    {
      title: "Hanley's Bar",
      latitude: 53.72076456315386,
      longitude: -8.998408913612367
    },
    {
      title: "The Ranch Bar",
      latitude: 53.717790195904996,
      longitude: -9.000045061111452
    },
    {
      title: "Sam's Bar",
      latitude: 53.716879114975235,
      longitude: -9.001294970512392
    }
  ];

  constructor() { }

  ionViewDidEnter()
  {
    this.showMap();
  }

  addMarkersToMap(markers)
  {
    for(let marker of markers)
    {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker)
  {
    let infoWindowContent = '<div id="content">' + 
    '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' + 
    '<p>Latitude: ' + marker.latitude + '</p>' + 
    '<p>Longitude' + marker.longitude + '</p' + 
    '</div';

    let InfoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.CloseAllInfoWindows();
      InfoWindow.open(this.map, marker);
    });
    this.infoWindows.push(InfoWindow);
  }

  CloseAllInfoWindows()
  {
    for(let window of this.infoWindows)
    {
      window.close();
    }
  }

  showMap()
  {
    const location = new google.maps.LatLng( 53.71989163833078, -8.998768329620363);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

}
