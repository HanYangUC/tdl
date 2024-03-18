import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TdlSvcService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8080/todo/all');
  }

  submitData(todo: string, todoDesc: string): Observable<any> {
    const data = { todo: todo, todoDesc: todoDesc }
    return this.http.post<any>('http://localhost:8080/todo/add', data)
  }

  getTodo(id: string): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8080/todo/' + id)
  }

  updateTodo(id: string, todo: any): Observable<any> {
    return this.http.put<any>('http://127.0.0.1:8080/todo/update/' + id, todo)
  }
}
