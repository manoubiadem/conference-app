
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  notifications = signal([
    'Bienvenue sur Conference App',
    'Votre profil a été mis à jour',
    'Vous avez une nouvelle notification'
  ]);

  afficher = signal(false);

  afficherNotifications() {
    this.afficher.update(valeur => !valeur);
  }

}
