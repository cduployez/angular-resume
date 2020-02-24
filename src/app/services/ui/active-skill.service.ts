import {Subject} from 'rxjs';
import {SkillEnum} from '../../model/skill/skill-enum';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ActiveSkillService {

    private _activeSkillEnums: SkillEnum[];

    activeSkillEnums$: Subject<SkillEnum[]> = new Subject<SkillEnum[]>();

    set activeSkillEnums(skillEnums: SkillEnum[]) {
        if (this._activeSkillEnums !== skillEnums) {
            this._activeSkillEnums = skillEnums;
            this.activeSkillEnums$.next(skillEnums);
        }
    }

}
