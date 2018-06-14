import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Streetlight, StreetlightData} from '../app/models/streetlight';
import * as data from '../app/streetlights.json';
import 'rxjs/add/operator/map';


@Injectable()
export class StreetlightService {

<<<<<<< HEAD
  // private url = 'https://my.api.mockaroo.com/streetlights.json?key=08931ac0';  // Uses Mockaroo API, change to our own API once ready
  private url = 'http://ec2-52-206-33-109.compute-1.amazonaws.com:3121/streetlights/';
=======
  private mapsUrl = 'http://streetlight.codeforkc.org:3121/streetlights';
>>>>>>> 75d55dc5bf1bea45f34ed5f207ae2af87583da2d

  constructor( private http: HttpClient ) {

  }

  /**
   * Request streetlight data from API
   */
  getStreetlights(): Observable<Streetlight[]> {
<<<<<<< HEAD
    return this.http.get<Streetlight[]>(this.url)
=======
    return this.http.get<StreetlightData>(this.mapsUrl)
      .map(streetlightData => streetlightData.streetlights)
>>>>>>> 75d55dc5bf1bea45f34ed5f207ae2af87583da2d
      .pipe(
        catchError(this.handleError('getStreetlights', []))
      );
  }

  getStreetlightsJSON(): any[] {
    const result = <any>data;
    return result;
  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
