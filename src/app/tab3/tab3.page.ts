import { Component} from '@angular/core';
import { Platform, ToastController, NavController, IonList } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {


  user = {};


  constructor(private nav: NavController, private plt: Platform, private toastController: ToastController) {
    
  }


  // CREATE
  addUser(user) {
  	this.user = user;
      this.showToast('Item added!')
      this.nav.navigateForward('');


  
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
