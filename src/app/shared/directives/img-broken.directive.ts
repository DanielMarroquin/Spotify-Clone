import { Directive, ElementRef, HostListener } from '@angular/core';
import { Element } from "@angular/compiler";

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elementNative = this.hostDirective.nativeElement;
    elementNative.src = '../../../assets/images/error-404.png';
    console.log('Error en la imagen ==>', this.hostDirective);
  }

  //TODO: HOST el huesped de la directiva
  constructor(private hostDirective: ElementRef) {
    console.log(hostDirective, 'date')
  }


}
