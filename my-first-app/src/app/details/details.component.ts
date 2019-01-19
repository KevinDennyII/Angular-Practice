import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [`
		.afterthe5th
		{
			color: white
		}
	`]
})
export class DetailsComponent implements OnInit {
  displayDetails = false;
  timeOfButtonClick = Date();
  clicksLogged = [''];

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
  	this.displayDetails = !this.displayDetails;
  	this.clicksLogged.push(this.timeOfButtonClick);
  }

  getNumberOfLogs(){
  	return this.clicksLogged.length;
  }

}
