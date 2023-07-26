import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input()
  position: string = 'Ingénieur Etudes et Développement - Fullstack';

  constructor() {}

  ngOnInit(): void {}
}
