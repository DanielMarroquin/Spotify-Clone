import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  // Declaramos un evento personalizado para dispararlo recibiendo como argumento
  callBack: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }
}
