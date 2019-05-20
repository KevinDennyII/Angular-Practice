import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) { // data.json is firebase required
    const headers = new Headers({'Content-Type': 'application/json'}); // setting headers
    // return this.http.post('https://udemy-ng-http-e41e4.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://udemy-ng-http-e41e4.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }
  getServers() {
    return this.http.get('https://udemy-ng-http-e41e4.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.data.json();
          return data
        }
      );
  }
}
