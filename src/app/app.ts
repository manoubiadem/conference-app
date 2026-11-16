
import { Component } from '@angular/core';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Profil } from './profil/profil';
import { Amis } from './amis/amis';
import { Notifications } from './notifications/notifications';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Navbar,
    Profil,
    Amis,
    Notifications,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
