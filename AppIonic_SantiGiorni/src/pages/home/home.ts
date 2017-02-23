import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SaintProvider } from '../../providers/saint-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SaintProvider]
})
export class HomePage {

  santi: any[];
  Mese: string;
  Giorno: string;

  constructor(public navCtrl: NavController, public saintService: SaintProvider) {

  }

   CercaConData(){    
      this.saintService.searchSantiByDate(this.Mese,this.Giorno).then(data =>{
      this.santi = data;
    });
  }

}
