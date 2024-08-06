import { Injectable } from "@angular/core";
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environments"
import { catchError, map, Observable, throwError } from "rxjs";
import { SessionService } from "./session.service";

export interface UserBookmarks {
  _id?: string;
  list_id: string;
  users_uuid: string;
  title: string;
}

@Injectable()
export class UserService {
  api = '/users/bookmarks';
  constructor(private http: HttpClient, private session: SessionService) {

  }

  getAll(): Observable<UserBookmarks[]> {
    const token = this.session.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(environment.apiUrl + this.api, { headers, responseType: 'arraybuffer' })
      .pipe(
        map((response: ArrayBuffer) => {
          // Assuming the response needs to be converted from ArrayBuffer to JSON
          const text = new TextDecoder().decode(response);
          return JSON.parse(text) as UserBookmarks[];
        }),
        catchError(error => {
          console.error('Error fetching user bookmarks', error);
          return throwError(() => new Error('Error fetching user bookmarks'));
        })
      );
  }

  patch(id: string, item: any) {
    return this.http.patch(environment.apiUrl + `${this.api}/${id}`, item)
  }

  add(item: any) {
    const token = this.session.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(environment.apiUrl + this.api, item, { headers })
  }

  remove(id: string) {
    return this.http.delete(environment.apiUrl + this.api + `/${id}`)
  }

  addAnime(data: any) {
    const token = this.session.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(environment.apiUrl + this.api + '/anime', data, { headers })
  }

  getByTitle(title: string) {
    const token = this.session.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(environment.apiUrl + this.api + '/anime/' + title, { headers })
  }
}
