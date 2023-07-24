import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SkillEnum } from '../../model/enums/skill.enum';

@Injectable({ providedIn: 'root' })
export class ActiveSkillsService {
  activeSkillEnums$: Subject<SkillEnum[]> = new Subject<SkillEnum[]>();

  activeChildrenSkillEnums$: Subject<SkillEnum[]> = new Subject<SkillEnum[]>();

  set activeSkillEnums(skillEnums: SkillEnum[]) {
    this.activeSkillEnums$.next(skillEnums);
  }

  set activeChildrenSkillEnums(skillEnums: SkillEnum[]) {
    this.activeChildrenSkillEnums$.next(skillEnums);
  }
}
