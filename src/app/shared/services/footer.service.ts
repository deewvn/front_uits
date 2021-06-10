import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }

  sendForm(form): Observable<any> {
    return this.http.post<any>(`https://back.uits-vsuet.ru/api/add`, { form });
  }

  getItems(page): Observable<any> {
    return this.http.post<any>(`https://back.uits-vsuet.ru/api/list`, { page } ).pipe(
      map(res => res),
      catchError(error => throwError(error))
    );
  }
}
