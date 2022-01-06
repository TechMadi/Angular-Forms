import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUserSettings } from './user-settings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'https://putsreq.com/1ESfyiS3yWHTBTLz0x82';
  constructor(private http: HttpClient) {}

  getSubscriptionTypes() {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: IUserSettings): Observable<IUserSettings> {
    return this.http.post<IUserSettings>(this.url, userSettings);

    // return of(userSettings);
  }
}
