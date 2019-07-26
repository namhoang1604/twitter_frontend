import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {}

  post(uri: string, data: object, params?: object): Observable<any> {
    const paramsOptions = Object.assign(httpOptions, { params });
    return this.http
      .post<any>(`${this.urlApi}/${uri}`, data, paramsOptions)
      .pipe(map(result => result));
  }

  get(uri: string, params?: object): Observable<any> {
    const paramsOptions = Object.assign(httpOptions, { params });
    return this.http
      .get<any>(`${this.urlApi}/${uri}`, paramsOptions)
      .pipe(map(result => result));
  }
}
