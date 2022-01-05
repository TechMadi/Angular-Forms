import { Component, OnInit } from '@angular/core';
import { IUserSettings } from './../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: 'Madi',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'annual',
    notes: 'Here are some notes',
  };

  userSettings: IUserSettings = { ...this.originalUserSettings };
  constructor() {}

  ngOnInit(): void {}
}
