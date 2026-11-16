
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil {
  nom = signal('Ahmed');
  email = signal('ahmed@gmail.com');
}
