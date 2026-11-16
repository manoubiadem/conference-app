
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-amis',
  imports: [],
  templateUrl: './amis.html',
  styleUrl: './amis.css'
})
export class Amis {

  amis = signal([
    'Ahmed',
    'Sarra',
    'Mohamed',
    'Yasmine'
  ]);

}
