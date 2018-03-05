import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response,RequestOptions} from '@angular/http';

@Injectable()
export class RegisterService {
private _baseURL = 'api/register';


constructor (private _http: Http) {}
signup(register: any): Observable<any> {
    let body = JSON.parse(JSON.stringify(register||null));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http
        .post(this._baseURL, register)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }
 
list(): Observable<any> {
    return this._http
        .get(this._baseURL)
        .map((res: Response) => res.json())
        .catch(this.handleError);
}


  private handleError(error: Response) {
    return Observable.throw(error.json().message || 'Server error');
    }
}