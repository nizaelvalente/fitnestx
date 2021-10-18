import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() response = new EventEmitter();
  @Input() title!: string;
  @Input() class!: string;
  @Input() icon!: string;
  @Input() progress!: string;

  constructor() {}

  ngOnInit(): void {
    const test = Number(this.progress);
    if (test !== NaN && test <= 100) {
      const progress: any = document.getElementById('button-body');
      const progressValue = test * 3.6;
      progress.style.background = `conic-gradient(var(--blue-color-one) ${progressValue}deg, white 0deg)`;
    }
  }

  public emitResponse() {
    this.response.emit('Retornou');
  }
}
