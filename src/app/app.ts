import { Component } from '@angular/core';
import { Button } from '@angular-app/button';

@Component({
  imports: [Button],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-app';
}
