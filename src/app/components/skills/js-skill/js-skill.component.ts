import { Component, Input } from '@angular/core';
import { JsSkillItem } from '../../../model/views/js-skill-item';

@Component({
  selector: 'cv-js-skill',
  templateUrl: './js-skill.component.html',
  styleUrls: ['./js-skill.component.scss']
})
export class JsSkillComponent {
  @Input()
  item: JsSkillItem | null = null;
}
