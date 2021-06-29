import { Component, OnInit } from '@angular/core';
import { MetafrenzyService } from 'ngx-metafrenzy';
declare var ClipboardJS: any;
declare var $: any;

@Component({
  selector: 'salvando-con-diez-yape',
  templateUrl: './yape.component.html',
  styles: []
})
export class YapeComponent implements OnInit {

  os: string

  constructor(private readonly metafrenzyService: MetafrenzyService) {
    this.metafrenzyService.setMetaTag('theme-color', '#9B1489')
    this.metafrenzyService.setOpenGraph({
      title: '#AyudarHaceBien - Yape',
      site_name: 'AyudarHaceBien',
      url: 'http://ayudarhacebien.pe/yape',
      'image:secure_url': 'https://i.ibb.co/grwfgkx/yape.jpg',
      'image:width': '960',
      'image:height': '500'
    })
  }

  ngOnInit(): void {
    const clipboard = new ClipboardJS('.copy')
    $('[data-toggle="tooltip"]').tooltip({
      animated: 'fade',
      placement: 'bottom',
      trigger: 'click',
      container: '.form-group',
      
    })
  }

  hideTooltip() {
    setTimeout(() => { $('[data-toggle="tooltip"]').tooltip('hide') }, 1000)
  }

  openApp() {
    if (this.os === 'android') {
      window.open('intent://com.bcp.innovacxion.yapeapp/#Intent;scheme=launch;package=com.bcp.innovacxion.yapeapp;S.content=WebContent;end')
    } else if (this.os === 'ios') {
      window.open('https://apps.apple.com/pe/app/yape/id1147249919')
    }
  }

  isPhone() {
    const userAgent = navigator.userAgent || navigator.vendor
    if (/android/i.test(userAgent)) {
      this.os = 'android'
      return true
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      this.os = 'ios'
      return true
    }
    return false
  }
}
