import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './changepassword.validators';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form;
  constructor(fb: FormBuilder) {
    this.form= fb.group({
      oldPassword: ['',Validators.required,PasswordValidators.oldPasswordCheck],
      newPassword: ['',Validators.required],
      confirmNewPassword: ['',Validators.required]
    },{
      validator: PasswordValidators.passwordsShouldMatch
    })
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmNewPassword() {
    return this.form.get('confirmNewPassword');
  }


}
