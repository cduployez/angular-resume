import {Subject} from 'rxjs';
import {SkillEnum} from '../../model/skill/skill-enum';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
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
