import { SkillEnum } from "../enums/skill.enum";

export class SkillBadgeDto {
  title: string;
  keywords: SkillEnum[];
  childrenKeywords: SkillEnum[];
}
