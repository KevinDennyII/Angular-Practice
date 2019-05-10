import {Subject} from 'rxjs';

export class UsersService {
  // a Subject is both an Observer and an Observable objects at the same time
  // a short-hand way of doing some observing like in the home.component.ts
  userActivated = new Subject();
}
