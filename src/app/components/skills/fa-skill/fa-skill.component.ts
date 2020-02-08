import {Component, Input, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'cv-fa-skill',
  templateUrl: './fa-skill.component.html',
  styleUrls: ['./fa-skill.component.scss']
})
export class FaSkillComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  faIcon: IconDefinition;

  constructor() { }

  ngOnInit(): void {
  }

}
