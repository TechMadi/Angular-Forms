import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { IUserSettings } from './../data/user-settings';
import { DataService } from './../data/data.service';

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

  subscriptionType: any = ['one', 'two', 'three'];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscriptionType = this.dataService.getSubscriptionTypes();
  }

  onSubmit(form: NgForm) {
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      (res) => {
        console.log('Success');
      },
      (err) => {}
    );
  }

  onBlur(field: NgModel) {}
}
