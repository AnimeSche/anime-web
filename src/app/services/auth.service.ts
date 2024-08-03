import {finalize} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environments"

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  logIn(data: any) {
    return this.http.post(environment.apiUrl + '/login', data)
  }

  register(data: any) {
    return this.http.post(environment.apiUrl + '/register',data)
  }
}
