import { Component } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  /**
   * Handles the click event of the button.
   */
  onClickBtn() {
    console.log('Button was clicked again!!!!');
  }
}
