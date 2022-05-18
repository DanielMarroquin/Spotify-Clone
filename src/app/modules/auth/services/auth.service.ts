import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable, tap } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api
  constructor( private httpClient: HttpClient, private cookie: CookieService) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.httpClient.post(`${this.URL}/auth/login`, body).pipe(
      tap((responseOk: any) => {
        const { tokenSession, data } = responseOk
        this.cookie.set('token', tokenSession, 4 ,'/')
      })
    )
  }
}
