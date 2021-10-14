import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() response = new EventEmitter();
  @Input() title!: string;
  @Input() color!: string;
  @Input() icon!: string;

  constructor() {}

  ngOnInit(): void {}

  public emitResponse() {
    this.response.emit('Retornou');
  }
}
