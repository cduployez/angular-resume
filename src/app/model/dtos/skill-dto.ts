import { SkillEnum } from '../enums/skill.enum';

export class SkillDto {
  title: string;
  keyword: SkillEnum;
  childrenKeywords: SkillEnum[];
}
