import { Component, Input, OnInit } from '@angular/core';
import { TextSkillItem } from '../../../model/skill/skill-item/text-skill-item';

@Component({
  selector: 'cv-text-skill',
  templateUrl: './text-skill.component.html',
  styleUrls: ['./text-skill.component.scss'],
})
export class TextSkillComponent implements OnInit {
  @Input()
  item: TextSkillItem;

  constructor() {}

  ngOnInit(): void {}
}
