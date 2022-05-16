import { Injectable } from '@angular/core';
import { TrackModel } from "@core/models/tracks.model";
import { observable, Observable, of } from "rxjs";
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  //Se coloca el simbolo de dolar $ para hacer referencia a un valor con un observable
  dataTracksTrending$: Observable<TrackModel[]> = of ([])
  dataTracksRandom$: Observable<any> = of ([])
  constructor() {
    const { data } : any = (dataRaw as any).default;
    this.dataTracksTrending$ = of (data);

    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id: 9,
        name: 'My Curse0',
        album: 'As Daylight Dies',
        url: 'https://',
        cover: 'https://upload.wikimedia.org/wikipedia/en/c/cd/KSE-AsDaylightDies.jpg'
      }
      setTimeout(() => {
        observer.next([trackExample])
      }, 5000)
    })
  }
}
