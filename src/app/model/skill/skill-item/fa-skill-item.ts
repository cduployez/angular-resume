import {SkillItem} from './skill-item';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {SkillTypeEnum} from '../skill-type-enum';
import {SkillEnum} from '../skill-enum';

export class FaSkillItem extends SkillItem {

    faIcon: IconDefinition;

    constructor(skillEnum: SkillEnum, title: string, faIcon: IconDefinition) {
        super(skillEnum, title, SkillTypeEnum.FA);
        this.faIcon = faIcon;
    }

}
