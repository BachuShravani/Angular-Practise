import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators{
  static oldPasswordCheck(control: AbstractControl) : Promise<ValidationErrors | null>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        if(control.value !== '1234')
          resolve({oldPasswordCheck: true});
        else
          resolve(null);
      },2000);
    });
  }

  static passwordsShouldMatch(control: AbstractControl){
    let newPassword = control.get('newPassword');
    let confirmNewPassword = control.get('confirmNewPassword');
    if(newPassword?.value !== confirmNewPassword?.value )
      return ({passwordsShouldMatch:true});
    return null;
  }
}
