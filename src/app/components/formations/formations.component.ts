import {Component, OnInit} from '@angular/core';
import {DatedItem} from '../../model/dated-item';

@Component({
  selector: 'cv-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  formationItems: DatedItem[] = FormationsComponent.initFormationItems();

  dateSuffix: string = '>';

  constructor() {
  }

  private static initFormationItems(): DatedItem[] {
    return [
      {
        beginDate: new Date('01-01-2015'),
        endDate: new Date('12-31-2017'),
        displayMonths: false,
        title: 'Hello World',
        description: 'Lorem Ipsum'
      }
    ];
  }

  ngOnInit(): void {
  }

}
