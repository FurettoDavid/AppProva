import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SaintProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SaintProvider {

  santi : any;

  constructor(public http: Http) {
    console.log('Hello SaintProvider Provider');
    //this.santi = [];
  }

  getSanti() {
    if(this.santi){
      return Promise.resolve(this.santi);
    }
    return new Promise (
      resolve => {
        this.http.get("http://santieicone.azurewebsites.net/saints")
        .map(res  => res.json() )
        .subscribe(data => {
          this.santi = data;
          resolve(this.santi);
        });
      }
    );
  }

}
