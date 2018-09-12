import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterProvider } from '../../providers/register/register';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //ngModels on HTML page
  fullname: string;
  email: string;
  password: string;
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private reg: RegisterProvider
  ){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goBackToLoginPage(){
    this.navCtrl.setRoot("LoginPage");
  }

  //Method calling register provider
  signupUser(){
    this.reg.registerUser(this.fullname, this.email, this.password)
    .subscribe(res =>{
      console.log(res);
    });
  }
}