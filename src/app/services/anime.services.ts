import { Injectable } from "@angular/core";
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environments"
import { Observable } from "rxjs";

@Injectable()
export class AnimeService {
  api = '/anime';
  constructor(private http: HttpClient) {

  }

  getAll(page: number, per_page: number) {
    const params = new HttpParams().set('page', page).set('per_page', per_page);
    return this.http.get(environment.apiUrl + this.api, { params: params })
  }

  patch(id: string, item: any) {
    return this.http.patch(environment.apiUrl + `${this.api}/${id}`, item)
  }

  add(item: any) {
    return this.http.post(environment.apiUrl + this.api, item)
  }

  remove(id: string) {
    return this.http.delete(environment.apiUrl + this.api + `/${id}`)
  }

  addFromUrl(data: any) {
    return this.http.post(environment.apiUrl + this.api + '/from-url', data)
  }

  fetchHtml(url: string): Observable<string> {
    return this.http.get('https://cors-anywhere.herokuapp.com/' + url, { responseType: 'text' });
  }

  getEpisodes(id: string): Observable<Object> {
    return this.http.get(environment.apiUrl + this.api + `/${id}` + '/episodes')
  }

  uploadSeason() {
    return this.http.post(environment.apiUrl + this.api + '/season', {})
  }
}
