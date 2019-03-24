import { Component, EventEmitter, Input } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService] //make sure that you dont overide services putting it into the providers array...
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {

  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //his.loggingService.logSatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}
