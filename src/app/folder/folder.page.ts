import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalmapPage } from '../localmap/localmap.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {

  constructor(private modalCtrl: ModalController) { }

  async maps()
  {
    let modal = await this.modalCtrl.create({
      component: LocalmapPage,
      cssClass: 'checkout-modal'
    });
    modal.present();
  }

}
