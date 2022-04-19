import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	onlyCountries: CountryISO[] = [CountryISO.Guinea, CountryISO.Canada, CountryISO.CôteDIvoire, CountryISO.UnitedStates];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

  constructor() { }

  ngOnInit(): void {
  }

}
