import { Component, Input } from '@angular/core';
import { TextSkillItem } from '../../../model/views/text-skill-item';

@Component({
  selector: 'cv-text-skill',
  templateUrl: './text-skill.component.html',
  styleUrls: ['./text-skill.component.scss']
})
export class TextSkillComponent {
  @Input()
  item: TextSkillItem | null = null;
}
