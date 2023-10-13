import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .map((response:any) => response.json())
      .catch(this.handleError);
  }

  get(id:any) {
    return this.http.get(this.url + '/' + id)
      .map((response:any) => response.json())
      .catch(this.handleError);
  }

  create(resource:any) {
    return this.http.post(this.url, JSON.stringify(resource))
      .map((response:any) => response.json())
      .catch(this.handleError);
  }

  update(resource:any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map((response:any) => response.json())
      .catch(this.handleError);
  }

  delete(id:any) {
    return this.http.delete(this.url + '/' + id)
      .map((response:any) => response.json())
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
