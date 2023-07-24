import { Component, Input } from '@angular/core';
import { SkillBadge } from '../../../model/experience/skill-badge';

@Component({
  selector: 'cv-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {
  @Input()
  badges: SkillBadge[] = [];
}
