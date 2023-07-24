import { SkillEnum } from '../enums/skill.enum';

export class SkillBadge {
  title: string;

  keywords: SkillEnum[];

  childrenKeywords: SkillEnum[];

  constructor(
    title: string,
    keywords?: SkillEnum[],
    childrenKeywords?: SkillEnum[]
  ) {
    this.title = title;
    this.keywords = keywords || [];
    this.childrenKeywords = childrenKeywords || [];
  }
}
