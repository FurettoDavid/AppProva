import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SaintDetailPage } from '../saint-detail/saint-detail';

import { SaintProvider } from '../../providers/saint-provider';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [SaintProvider]
})
export class AboutPage {

  santi: any[];

  constructor(public navCtrl: NavController, public saintService: SaintProvider) {
   // this.santi = []; 
    // for(let i = 0; i< 10 ; i++) {
    //   this.santi.push({Nome : "Santo " + i, id : i});
    // }
    saintService.getSanti().then(data =>{
      this.santi = data;
    });
  }

  SaintSelected(santo){
    this.navCtrl.push(SaintDetailPage, {item : santo});
    //alert ("Oggi è " + santo.Nome);
  }

}
