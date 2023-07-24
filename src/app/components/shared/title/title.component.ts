import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  detail: string = null;

  constructor() {}

  ngOnInit(): void {}
}
