import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/RX';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubscription: Subscription;
  customsObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // Simple example of an observable
    const myNumbers = Observable.interval(1000);
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    // Angular technically does the creation of an observable for you
    const myObservable = Observable.create((observer:  Observer) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
       // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.error('this does not work');
      }, 6000);
    });
    this.customsObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  // clean up method to make sure we remove memory leaks by unsubscribing from our observables
  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customsObsSubscription.unsubscribe();
  }

}
