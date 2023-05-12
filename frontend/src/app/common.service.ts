import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _snackBar: MatSnackBar) {
  }
  openSnackBar(message: string) {
    
    this._snackBar.open(message);
    
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 3000);
  }
  
 
  validateEmail(inputText: string): any {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
      // alert('Valid email address!');
      return true;
    } else {
      return false;
    }
  }
  validatePhone(inputText: string) {
    /* var a = document.getElementById(txtPhone).value;*/
     var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
     if (filter.test(inputText)) {
         return true;
     }
     else {
         return false;
     }
 }
  isEmail(email: string) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
      return false;
    }else{
      return true;
    }
  }
  IsName(Name: string) {
    var regex = /^([a-zA-Z ]{3,16})$/;
    if(!regex.test(Name)) {
      return false;
    }else{
      return true;
    }
  }

  PassWord(Pass: string){
    //var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,12}$/;
    var regex =	/^([a-zA-Z0-9!@#$%^&*]{5,12})+$/;
    if(!regex.test(Pass)) {
      return false;
    }else{
      return true;
    }
  }
  NumBer(Num: string){
    //var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,12}$/;
    var regex =	/^[0-9-+]+$/;
    if(!regex.test(Num)) {
      return false;
    }else{
      return true;
    }
  }

  groupBy(xs: any, key: string): any {
    return xs.reduce((rv: any, x: any) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
}
