import {SkillTypeEnum} from './skill-type-enum';

export class SkillItem {

    title: string;

    readonly skillTypeEnum: SkillTypeEnum;

    constructor(title: string, skillTypeEnum: SkillTypeEnum) {
        this.title = title;
        this.skillTypeEnum = skillTypeEnum;
    }

}
