import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { SnackBarService } from '../snackBarService/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers!: HttpHeaders;

  options: any;
  constructor(private http: HttpClient,
    private authService:AuthService
    //  private notification: SnackBarService
     ) { }

  private getHeader() {
    var token = "Bearer " + this.authService.currentUser()


    this.headers = new HttpHeaders({
      'Authorization': token,
    });
    this.options = {
      headers: this.headers,
    };
  }


  get(apiEndPoint: string): Observable<any> {
    this.getHeader();
    return this.http.get(apiEndPoint, this.options).pipe(retry(3), catchError(error => this.handleError(error)));
  }

  getWithCustomHeader(apiEndPoint: string,headers: HttpHeaders): Observable<any> {
    var options = {
      headers: headers,
    };
    return this.http.get(apiEndPoint, options).pipe(retry(3), catchError(error => this.handleError(error)));
  }

  post(apiEndPoint: string, param: any): Observable<any> {
    let body = param;
    this.getHeader();
    return this.http.post(apiEndPoint, body, this.options).pipe(catchError(error => this.handleError(error)));
  }
  put(apiEndPoint: string, param: any): Observable<any> {
    let body = param;
    this.getHeader();
    return this.http.put(apiEndPoint, body, this.options).pipe(catchError(error => this.handleError(error)));
  }
  patch(apiEndPoint: string, param: any): Observable<any> {
    let body = param;
    this.getHeader();
    return this.http.patch(apiEndPoint, body, this.options).pipe(catchError(error => this.handleError(error)));
  }
  delete(apiEndPoint: string): Observable<any> {
    this.getHeader();
    return this.http.delete(apiEndPoint, this.options).pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    // this.notification.open("" + error, 'error', 1000);
    console.log(error)
    if (error.error instanceof ErrorEvent) {
    } else {
    }
    return throwError('Something bad happened; please try again later.');
  }

}
