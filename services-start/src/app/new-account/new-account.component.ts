import { Component, } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
 
  constructor(private loggingService: LoggingService,
    private accountsServices: AccountsService) {
    this.accountsServices.statusUpdated.subscribe(
      (status: string)=> alert('New Status' + status)
     );

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsServices.addAccount(accountName, accountStatus);
    //this.loggingService.logSatusChange(accountStatus);

  }
}
