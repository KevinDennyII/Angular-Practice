import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
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

}
