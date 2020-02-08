import {SkillTypeEnum} from '../skill-type-enum';
import {SkillEnum} from '../skill-enum';
import {SkillItem} from './skill-item';

export class TextSkillItem extends SkillItem {

    iconText: string;

    constructor(skillEnum: SkillEnum, title: string, iconText: string) {
        super(skillEnum, title, SkillTypeEnum.TEXT);
        this.iconText = iconText;
    }

}
