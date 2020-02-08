import {SkillItem} from './skill-item';
import {SkillTypeEnum} from './skill-type-enum';

export class TextSkillItem extends SkillItem {

    iconText: string;

    constructor(title: string, iconText: string) {
        super(title, SkillTypeEnum.TEXT);
        this.iconText = iconText;
    }

}
