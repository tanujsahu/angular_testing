import { Component } from '@angular/core';

@Component({
  selector: 'app-methmatical',
  templateUrl: './methmatical.component.html',
  styleUrls: ['./methmatical.component.scss']
})
export class MethmaticalComponent {

  constructor() {

  }

  /**
   * Addition
   */
  add(a: number, b: number) {
    return a + b;
  }

  /**
   * Subtraction
   */
  sub(a: number, b: number) {
    return a - b;
  }

  /**
 * Multiplication
 */
  mul(a: number, b: number) {
    return a * b;
  }

  /**
* Division
*/
  div(a: number, b: number) {
    return a / b;
  }

  /**
  * Modulas
  */
  mod(a: number, b: number) {
    return a % b;
  }

}
