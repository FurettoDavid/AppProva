import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SaintProvider } from '../../providers/saint-provider';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [SaintProvider]
})
export class ContactPage {

  santi: any[];

  constructor(public navCtrl: NavController, public saintService: SaintProvider) {
      this.santi = [];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
   // this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.saintService.searchSantiByName(val).then(data =>{
      this.santi = data;
    });
    
    }
  }

}
