import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cv-descriptions',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  @Input()
  descriptions: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
