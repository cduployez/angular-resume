import { SkillDto } from '../../model/dtos/skill-dto';
import { SkillJson } from '../../model/jsons/skill-json';

export class SkillDtoMapper {
  static fromSkillJson(json: SkillJson): SkillDto {
    const dto: SkillDto = new SkillDto();
    dto.title = json.title;
    dto.keyword = json.keyword;
    dto.childrenKeywords = json.childrenKeywords;
    return dto;
  }

  static fromSkillJsons(jsons: SkillJson[]): SkillDto[] {
    return jsons.map(SkillDtoMapper.fromSkillJson);
  }
}
