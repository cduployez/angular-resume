import { Component, Input } from '@angular/core';
import { SkillEnum } from '../../../model/enums/skill.enum';
import { FaSkillItem } from '../../../model/views/fa-skill-item';
import { SkillMessages } from '../skill/skill-messages';

@Component({
  selector: 'cv-fa-skill',
  templateUrl: './fa-skill.component.html',
  styleUrls: ['./fa-skill.component.scss']
})
export class FaSkillComponent {
  readonly messages: SkillMessages = new SkillMessages();

  @Input()
  item: FaSkillItem | null = null;

  optionalClass(skillEnum: SkillEnum): string {
    return skillEnum ? this.messages.skillCssClass(skillEnum) : '';
  }
}
