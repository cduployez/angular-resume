import {SkillEnum} from '../skill/skill-enum';

export class SkillBadge {

    title: string;

    keywords: SkillEnum[];

    constructor(title: string, ...keywords: SkillEnum[]) {
        this.title = title;
        this.keywords = keywords;
    }
}
