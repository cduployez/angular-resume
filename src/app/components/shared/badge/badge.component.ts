import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cv-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input()
  badge: string;

  constructor() { }

  ngOnInit(): void {
  }

}
