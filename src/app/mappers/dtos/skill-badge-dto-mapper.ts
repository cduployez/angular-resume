import { SkillBadgeDto } from "../../model/dtos/skill-badge-dto";
import { SkillBadgeJson } from "../../model/jsons/skill-badge-json";

export class SkillBadgeDtoMapper {
  static fromSkillBadgeJson(json: SkillBadgeJson): SkillBadgeDto {
    const dto: SkillBadgeDto = new SkillBadgeDto();
    dto.title = json.title;
    dto.keywords = json.keywords;
    dto.childrenKeywords = json.childrenKeywords;
    return dto;
  }

  static fromSkillBadgeJsons(jsons: SkillBadgeJson[]): SkillBadgeDto[] {
    return jsons.map(SkillBadgeDtoMapper.fromSkillBadgeJson);
  }
}
