import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  zoom = 6;

  constructor() {
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  buildMap(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [-78.6284947, -1.2465876]
    });

    new mapboxgl.Marker()
      .setLngLat([-78.6284947, -1.2465876])
      .addTo(this.map);

    new mapboxgl.Marker()
      .setLngLat([-78.4936805, -0.2156388])
      .addTo(this.map);

    new mapboxgl.Marker()
      .setLngLat([-79.4621517, -1.0220686])
      .addTo(this.map);

    new mapboxgl.Marker()
      .setLngLat([-80.9658982, -2.211785])
      .addTo(this.map);

    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
