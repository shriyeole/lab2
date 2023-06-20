import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule],
})
export class Tab1Page {
  @ViewChild(IonModal)
  modal!: IonModal;

  message ='';
  name!: string;
  pass!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
    this.modal.dismiss(this.pass, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Welcome Back, ${ev.detail.data}!`;
}
}
}