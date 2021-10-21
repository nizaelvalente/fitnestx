import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() class!: string;
  @Input() icon!: string;
  @Input() type!: string;
  @Input() alt!: string;
  @Input() visible!: string

  constructor() {}

  ngOnInit(): void {
    this.icon = this.getIcon(this.icon);
    this.visible = this.getIcon(this.visible);
  }

  getIcon(name: string) {
    return `../../../assets/icons/Light/${name}.svg`;
  }
}
