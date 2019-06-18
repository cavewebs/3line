import { Component } from '@angular/core';
import { Platform, ToastController, IonList } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {


  user = {};


  constructor(private plt: Platform, private toastController: ToastController) {
    
  }


  // CREATE
  addUser() {
      this.showToast('Item added!')
  
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
