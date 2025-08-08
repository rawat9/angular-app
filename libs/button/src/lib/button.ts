import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  /**
   * Handles the click event of the button.
   */
  onClick() {
    console.log('Button was clicked!');
  }
}
