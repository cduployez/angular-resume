import {SkillGroupDto} from '../../model/dtos/skill-group-dto';
import {SkillBadgeDtoMapper} from './skill-badge-dto-mapper';
import {SkillGroupJson} from '../../model/jsons/skill-group-json';
import {SkillDtoMapper} from './skill-dto-mapper';

export class SkillGroupDtoMapper {
  static fromSkillGroupJson(json: SkillGroupJson): SkillGroupDto {
    const dto: SkillGroupDto = new SkillGroupDto();
    dto.title = json.title;
    dto.skills = SkillDtoMapper.fromSkillJsons(json.skills);
    return dto;
  }

  static fromSkillGroupJsons(jsons: SkillGroupJson[]): SkillGroupDto[] {
    return jsons.map(SkillGroupDtoMapper.fromSkillGroupJson);
  }
}
