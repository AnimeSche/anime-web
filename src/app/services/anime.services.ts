import { Injectable } from "@angular/core";
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environments"

@Injectable()
export class AnimeService {
  constructor(private http: HttpClient) {
  }

  getAll(page: number, per_page: number) {
    const params = new HttpParams().set('page', page).set('per_page', per_page);
    return this.http.get(environment.apiUrl + "/anime", { params: params })
  }

  patch(id: string, item: any) {
    return this.http.patch(environment.apiUrl + `/anime/${id}`, item)
  }
}
