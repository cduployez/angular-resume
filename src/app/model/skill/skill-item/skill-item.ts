import {SkillTypeEnum} from '../skill-type-enum';
import {SkillEnum} from '../skill-enum';

export class SkillItem {

    title: string;

    readonly skillTypeEnum: SkillTypeEnum;

    skillEnum: SkillEnum;

    childrenKeywords: SkillEnum[];

    constructor(title: string, skillEnum: SkillEnum, keywords: SkillEnum[], skillTypeEnum: SkillTypeEnum) {
        this.title = title;
        this.skillEnum = skillEnum;
        this.childrenKeywords = keywords;
        this.skillTypeEnum = skillTypeEnum;
    }

}
