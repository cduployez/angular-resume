import { Component, Input } from '@angular/core';
import { SkillBadgeDto } from '../../../model/dtos/skill-badge-dto';

@Component({
  selector: 'cv-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {
  @Input()
  badges: SkillBadgeDto[] = [];
}
