import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServMovkApiService {
  private API_PREFIX = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  public getData(endPoint: string) {
    return this.http.get(this.API_PREFIX + endPoint);
  }

  public postData(area: string, data: any) {
    return this.http.post(this.API_PREFIX + area, data);
  }

  public deleteData(endPoint: string, id: string) {
    return this.http.delete(this.API_PREFIX + endPoint + id);
  }
}
