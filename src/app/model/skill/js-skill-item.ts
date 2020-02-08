import {SkillItem} from './skill-item';
import {SkillTypeEnum} from './skill-type-enum';

export class JsSkillItem extends SkillItem {

    iconText: string;

    constructor(title: string, iconText: string) {
        super(title, SkillTypeEnum.JS);
        this.iconText = iconText;
    }

}
