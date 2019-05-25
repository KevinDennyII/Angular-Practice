import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line:indent
	loadedFeature = 'recipe';

  // tslint:disable-next-line:indent
	ngOnInit() {
    // tslint:disable-next-line:indent
	  firebase.initializeApp({
      apiKey: "AIzaSyBW7__TSBMNERgvLrqgm6xls2n_UO_7Ev4",
      authDomain: "ng-recipe-book-c5a67.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
		this.loadedFeature = feature;
	}
}
