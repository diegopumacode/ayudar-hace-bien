import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-como-ayudar',
  templateUrl: './como-ayudar.component.html',
  styleUrls: ['./como-ayudar.component.scss']
})
export class ComoAyudarComponent implements AfterViewInit {
  title:string="¿Cómo Ayudar?"
  constructor() { }

  ngAfterViewInit(): void {
    $('body').addClass('loaded')
  }
}
