import {SkillTypeEnum} from '../skill-type-enum';
import {SkillEnum} from '../skill-enum';

export class SkillItem {

    title: string;

    readonly skillTypeEnum: SkillTypeEnum;

    skillEnum: SkillEnum;

    constructor(skillEnum: SkillEnum, title: string, skillTypeEnum: SkillTypeEnum) {
        this.skillEnum = skillEnum;
        this.title = title;
        this.skillTypeEnum = skillTypeEnum;
    }

}
