import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,retry,catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApihelperService {
  baseurl = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }


  httpOptions = {
    headers: new HttpHeaders({
      'accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }),
    body: undefined,
    params: undefined
  }
  complete<TResponse>(responseJson: TResponse): TResponse {
    return responseJson;
  }
  //GET
  public apiGet<TResponse>(endPoint: string, query: any = undefined): Observable<any> {
    return this.http.get<TResponse>(this.baseurl + endPoint, { params: query })
      .pipe(
        map(responseJson => this.complete<TResponse>(responseJson)),
        retry(1),
        catchError(error => this.errorHandler(error))
      )
  }
  errorHandler(error: any) {
    console.log(error);
    return error;
  }
}
