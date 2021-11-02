import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page-two',
  templateUrl: './register-page-two.component.html',
  styleUrls: ['./register-page-two.component.scss']
})
export class RegisterPageTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getImg(name: string) {
    return `../../../../assets/images/${name}.svg`;
  }

  getIcon(name: string) {
    return `../../../assets/icons/Light/${name}.svg`;
  }
}
