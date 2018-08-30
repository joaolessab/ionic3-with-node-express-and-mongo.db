import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //Function to open another page
  //When we use PUSH method, we will see the Back Button Page on the next page
  //If we do not want to see, we use setRoot method
  registerPage(){
    //Lazy loading on string
    this.navCtrl.push("RegisterPage");
  }
}