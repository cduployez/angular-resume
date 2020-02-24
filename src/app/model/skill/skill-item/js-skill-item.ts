import {SkillItem} from './skill-item';
import {SkillTypeEnum} from '../skill-type-enum';
import {SkillEnum} from '../skill-enum';

export class JsSkillItem extends SkillItem {

    iconText: string;

    constructor(title: string, skillEnum: SkillEnum, keywords: SkillEnum[], iconText: string) {
        super(title, skillEnum, keywords, SkillTypeEnum.JS);
        this.iconText = iconText;
    }

}
