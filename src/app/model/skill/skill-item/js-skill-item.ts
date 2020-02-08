import {SkillItem} from './skill-item';
import {SkillTypeEnum} from '../skill-type-enum';
import {SkillEnum} from '../skill-enum';

export class JsSkillItem extends SkillItem {

    iconText: string;

    constructor(skillEnum: SkillEnum, title: string, iconText: string) {
        super(skillEnum, title, SkillTypeEnum.JS);
        this.iconText = iconText;
    }

}
