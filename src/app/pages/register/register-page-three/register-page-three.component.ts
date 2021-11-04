import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page-three',
  templateUrl: './register-page-three.component.html',
  styleUrls: ['./register-page-three.component.scss']
})
export class RegisterPageThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getImg(name: string) {
    return `../../../../assets/images/${name}.svg`;
  }
}
