import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() class!: string;
  @Input() icon!: string;
  @Input() type!: string;
  @Input() alt!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
