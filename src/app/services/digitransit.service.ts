import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {

  apiurl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http: HttpClient) { }

  getRoutes(name) {
    const body = `{
  stops(name: "${name}") {
      routes {
        gtfsId
        shortName
        longName
      }
    }
  }
}`;
    const headers = {
    headers: new HttpHeaders().set('Content-type', 'application/graphql')
    };

    interface ReittiData {
      data: Object;
    }
    return this.http.post<ReittiData>(this.apiurl, body, headers);
  }

}
