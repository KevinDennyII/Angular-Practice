import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-logs',
  templateUrl: './btn-logs.component.html',
  styles: [`
		.afterthe5th
		{
			color: white
		}
	`]
})
export class BtnLogsComponent implements OnInit {
  timeOfButtonClick = Date();

  constructor() { }

  ngOnInit() {
  }

}
