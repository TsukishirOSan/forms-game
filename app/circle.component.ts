import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CircleModel } from './circle.model';

@Component({
  selector: '[circleForm]',
  template: '<svg:circle attr.cx="{{ circleData.centerX }}" attr.cy="{{ circleData.centerY }}" attr.r="{{ circleData.radius }}"  fill="yellow" (mousedown)="divide()"></circle>'
})
export class CircleComponent {
  @Input()
  circleData: CircleModel;
  @Output()
  onDivide = new EventEmitter<CircleModel>();

  public divide(): void{
    this.onDivide.emit(this.circleData);
  }
}
