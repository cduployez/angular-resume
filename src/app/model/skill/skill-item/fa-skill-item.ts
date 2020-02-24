import {SkillItem} from './skill-item';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {SkillTypeEnum} from '../skill-type-enum';
import {SkillEnum} from '../skill-enum';

export class FaSkillItem extends SkillItem {

    faIcon: IconDefinition;

    constructor(title: string, skillEnum: SkillEnum, keywords: SkillEnum[], faIcon: IconDefinition) {
        super(title, skillEnum, keywords, SkillTypeEnum.FA);
        this.faIcon = faIcon;
    }

}
