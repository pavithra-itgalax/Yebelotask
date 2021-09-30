import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class DataService {

  constructor(
    public http: HttpClient,
  ) { }

  getData(path): Observable<any> {
    return this.http.get(path);
  }
  postData(path, body) {
    return this.http.post(path, body);
  }
}
