import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-descriptions',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  @Input()
  descriptions: string[] = [];
}
